import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>This is sample text up</Text>
        {todos.map((todo) => (
          <Text style={styles.todo} key={todo.id}>
            {todo.title}
          </Text>
        ))}
        <Text>{todos.length}</Text>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffcfc",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 4,
    paddingRight: 4,
  },
  text: {
    color: "#22ff00",
    fontSize: 40,
    fontWeight: "900",
  },
  todo: {
    padding: 2,
  },
});
