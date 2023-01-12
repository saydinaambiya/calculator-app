import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ButtonCalculator, Row} from "./components";
import {useState} from "react";

export default function App() {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [operator, setOperator] = useState(null);
    const [prevNumber, setPrevNumber] = useState("0");

    const reset = () => {
        setCurrentNumber("0");
        setOperator(null);
        setPrevNumber("0");
    }

    const handleNumber = (value) => {
        if (currentNumber === "0") {
            setCurrentNumber(value);
        } else {
            setCurrentNumber(currentNumber + value)
        }
    }

    const handleOperator = (tappedOperator) => {
        if (operator === null) {
            setOperator(tappedOperator)
            setPrevNumber(currentNumber)
            setCurrentNumber("0")
        } else {
            if (currentNumber === "") {
                setOperator(tappedOperator)
                setCurrentNumber("")
            } else {
                setOperator(tappedOperator)
                setPrevNumber(currentNumber)
                setCurrentNumber("")
            }
        }
    }

    const handleCalculation = () => {
        let result = 0;
        console.log(prevNumber, currentNumber)
        switch (operator) {
            case "+":
                result = parseInt(prevNumber) + parseInt(currentNumber);
                break;
            case "-":
                result = parseInt(prevNumber) - parseInt(currentNumber);
                break;
            case "x":
                result = parseInt(prevNumber) * parseInt(currentNumber);
                break;
            case "/":
                result = parseInt(prevNumber) / parseInt(currentNumber);
                break;
        }
        setCurrentNumber(result)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.value}>
                    {currentNumber}
                </Text>

                <Row>
                    <ButtonCalculator
                        text="C"
                        theme="secondary"
                        onPress={reset}
                    />

                    <ButtonCalculator
                        text="+/-"
                        theme="secondary"
                    />
                    <ButtonCalculator
                        text="%"
                        theme="secondary"
                    />
                    <ButtonCalculator
                        text="/"
                        theme="accent"
                        onPress={() => handleOperator("/")}
                    />
                </Row>

                <Row>
                    <ButtonCalculator text="7" onPress={() => handleNumber("7")}/>
                    <ButtonCalculator text="8" onPress={() => handleNumber("8")}/>
                    <ButtonCalculator text="9" onPress={() => handleNumber("9")}/>
                    <ButtonCalculator text="X" theme="accent" onPress={() => handleOperator("x")}/>
                </Row>

                <Row>
                    <ButtonCalculator text="4" onPress={() => handleNumber("4")}/>
                    <ButtonCalculator text="5" onPress={() => handleNumber("5")}/>
                    <ButtonCalculator text="6" onPress={() => handleNumber("6")}/>
                    <ButtonCalculator text="-" theme="accent" onPress={() => handleOperator("-")}/>
                </Row>

                <Row>
                    <ButtonCalculator text="1" onPress={() => handleNumber("1")}/>
                    <ButtonCalculator text="2" onPress={() => handleNumber("2")}/>
                    <ButtonCalculator text="3" onPress={() => handleNumber("3")}/>
                    <ButtonCalculator text="+" theme="accent" onPress={() => handleOperator("+")}/>
                </Row>

                <Row>
                    <ButtonCalculator text="0" onPress={() => handleNumber("0")}/>
                    <ButtonCalculator text="." onPress={() => handleNumber(".")}/>
                    <ButtonCalculator text="=" theme="accent" onPress={handleCalculation}/>
                </Row>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202020",
        justifyContent: "flex-end"
    },
    value: {
        color: "#fff",
        fontSize: 100,
        textAlign: 'right',
        marginRight: 20,
        marginBottom: 10,

    }
});
