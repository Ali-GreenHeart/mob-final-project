import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";

import { prepareGrid } from "../../utils/prepareGrid"
import { chooseColor } from "../../utils/chooseColor"
import { EndGameModal } from "./EndGameModal"


export const MemoryGridGameScreen = () => {
  const [size,setSize] = useState(3);
  const [modal,setModal] = useState(false)
  const [grid, setGrid] = useState(prepareGrid(size));
  const [openedCount, setOpenedCount] = useState(0);
  const [openedSecretCount, setOpenedSecretCount] = useState(0);
  const [isOpenedForRemember, setIsOpenedForRemember] = useState(true);
  const openedTimer = useRef(null);
  const gameTimer = useRef(null)

  const openedLimit = Math.floor(((size * size) / 100) * 90);
  const isLimitPassed = openedCount >= openedLimit;
  const isWin = Math.floor((size * size) / 2) === openedSecretCount;

  const getCellSize = () => {
    const { width, height } = Dimensions.get("window");
    const isPortrait = height > width;
    const targetSize = isPortrait ? width : height;
    console.log("getCellSize");
    return (targetSize - 100) / size;
  };
  const [cellSize, setCellSize] = useState(getCellSize());

  const cellPressHandler = (y, x) => {
    if (!grid[y][x].opened && !isLimitPassed) {
      setGrid((grid) => {
        const updatedGrid = [...grid];
        updatedGrid[y] = [...updatedGrid[y]];
        updatedGrid[y][x] = { ...updatedGrid[y][x], opened: true };

        return updatedGrid;
      });
      setOpenedCount((count) => count + 1);

      if (grid[y][x].secret) {
        setOpenedSecretCount((count) => count + 1);
      }
       setModal(openedCount + 1 >= openedLimit);
    }
  };

  const resetGame = () => {
    setGrid(prepareGrid(size));
    setOpenedCount(0);
    setOpenedSecretCount(0);
    setModal(false);

    setIsOpenedForRemember(true);
    closeForRemembering();
    gameTimerHandler();
  };

  const closeForRemembering = () => {
    if (openedTimer.current) {
      clearTimeout(openedTimer.current);
    }
    openedTimer.current = setTimeout(() => {
      setIsOpenedForRemember(false);
    }, 1000);
  };
  
  const gameTimerHandler = () => {
    if (gameTimer.current) {
        clearTimeout(gameTimer.current);
      }
      gameTimer.current = setTimeout(() => setModal(true), 60000);
  }
   
  useEffect(() => {
    closeForRemembering();
    gameTimerHandler();
  }, []);

  useEffect(() => {
    const updateCellSize = () => {
      setCellSize(getCellSize());
    };
    Dimensions.addEventListener("change", updateCellSize);

    return () => Dimensions.removeEventListener("change", updateCellSize);
  }, []);

  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>
      <Text>
        {openedCount}/{openedSecretCount}/{openedLimit}
      </Text>
      <Text>{isLimitPassed ? (isWin ? "Win" : "Lose") : "inProcess"}</Text>
      <View style={styles.grid}>
        {grid.map((row, y) => (
          <View style={styles.row} key={y}>
            {row.map(({ opened, secret }, x) => (
              <TouchableOpacity
                activeOpacity={0.5}
                key={x}
                onPress={() => cellPressHandler(y, x)}
              >
                <View
                  style={{
                    ...styles.cell,
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: chooseColor(
                      opened || isOpenedForRemember,
                      secret
                    ),
                  }}
                ></View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.buttons}>
        <Button title="Back"   />
        <Button title="Reset" onPress={() => resetGame()} />
      </View>

      <EndGameModal
        visible={modal}
        close={resetGame}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
  row: {
    flexDirection: "row",
  },
  cell: {
    borderColor: "grey",
    borderWidth: 1,
    margin: 3
  },
  buttons: {
    width: 300,
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-around",
  },
});

