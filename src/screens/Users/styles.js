import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  user: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  userText: {
    fontSize: 16,
    marginBottom: 5,
  },
  reloadButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  reloadText: {
    color: '#fff',
    fontSize: 16,
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default styles;