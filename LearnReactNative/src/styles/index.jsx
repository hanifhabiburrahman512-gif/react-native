import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 30,
  },
  form: {
    padding: 12,
  },
  upload: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: '#444',
    borderWidth: 1,
    margin: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 24,
    color: '#fff',
  },
  textarea: {
    height: 150,
    borderColor: '#444',
    borderWidth: 1,
    margin: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 24,
    color: '#fff',
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
  },
  button: {
    padding: 10,
    borderRadius: 24,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
