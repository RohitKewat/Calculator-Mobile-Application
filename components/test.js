
import { Text, View, TextInput, Button, StyleSheet } from "react-native"


import React, { useEffect, useState } from "react"
const Test = (props) => {
    const [input1, setinput1] = useState([]);
    const [operator, setoperator] = useState(null);
    const [result, setResult] = useState(null)

    const setExpression = (input) => {
        setResult(null);
        setinput1((prev) => [...prev, input])
    }
    useEffect(() => {
        let str2 = input1.join('');
        console.log(str2);
        setoperator(str2)

    }, [input1])
    const calculate = () => {
        const re = eval(operator);
        if(re){
            setResult(re)
        }else{

            setResult("ERROR");
        }
        setinput1([])
        console.log(result);
    }
    return (
        <View>

            {operator ? <Text style={[styles.display]}> {operator} </Text> : ""}
            {result ? <Text style={[styles.display]}> = {result} </Text> : ""}

            <View style={[styles.row, styles.headerRow]}>
                <Text style={styles.cell} onPress={() => setExpression("+")}>+</Text>
                <Text style={styles.cell} onPress={() => setExpression("-")}>-</Text>
                <Text style={styles.cell} onPress={() => setExpression("*")}>x</Text>
                <Text style={styles.cell} onPress={() =>  [setinput1([]),setResult(null)]}>C</Text>
            </View>
            <View style={[styles.row, styles.headerRow]}>
                <Text style={styles.cell} onPress={() => setExpression(1)}>1</Text>
                <Text style={styles.cell} onPress={() => setExpression(2)}>2</Text>
                <Text style={styles.cell} onPress={() => setExpression(3)}>3</Text>
                <Text style={styles.cell} onPress={() => setExpression("/")}>/</Text>

            </View>
            <View style={[styles.row]}>
                <Text style={styles.cell} onPress={() => setExpression(4)}>4</Text>
                <Text style={styles.cell} onPress={() => setExpression(5)}>5</Text>
                <Text style={styles.cell} onPress={() => setExpression(6)}>6</Text>
                <Text style={styles.cell} onPress={() => setExpression(".")}>.</Text>

            </View>
            <View style={styles.row}>
                <Text style={styles.cell} onPress={() => setExpression(7)}>7</Text>
                <Text style={styles.cell} onPress={() => setExpression(8)}>8</Text>
                <Text style={styles.cell} onPress={() => setExpression(9)}>9</Text>
                <Text style={styles.cell} onPress={() => setExpression(0)}>0</Text>

            </View>
            <View style={styles.btn}>

                <Button
                    onPress={() => calculate()}
                    title="calculate"
                    color="blue"
                    style={[styles.btn, styles.cell]}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    table: {

        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        color: 'white',
        marginBottom: 10,
    },
    row: {
        backgroundColor: 'black',
        width: '100%',

        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

        paddingVertical: 40,
    },
    headerRow: {

        backgroundColor: 'black',
        fontWeight: 'bold',
    },
    cell: {

        fontSize: 40,
        color: 'white',
        flex: 1,
        padding: 2,
    },
    btn: {
        color: "black",
        marginBottom: -70,
    },
    display: {
        fontSize: 40,
        color: 'white',
        marginLeft: 10
    }
});

export default Test