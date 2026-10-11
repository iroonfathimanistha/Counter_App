
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [increasePresses, setIncreasePresses] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          My Awesome Counter
        </Text>

        <Text style={styles.subtitle}>
          Keep track of your progress
        </Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>
            CURRENT COUNT
          </Text>

          <Text style={styles.count}>
            {count}
          </Text>

          <Text style={styles.hint}>
            {count === 0
              ? 'Start counting!'
              : count >= 20
              ? 'Maximum reached!'
              : 'Keep going!'}
          </Text>
        </View>

        <Text style={styles.clicks}>
          You have clicked {count}{' '}
          {count === 1 ? 'time' : 'times'}
        </Text>

        <Text style={styles.clicks}>
          Increase presses: {increasePresses}
        </Text>

        {count >= 10 && (
          <Text style={styles.success}>
            Great job! 🎉
          </Text>
        )}

        {message !== '' && (
          <Text style={styles.message}>
            {message}
          </Text>
        )}

        <View style={styles.buttons}>
          <Pressable
            disabled={count >= 20}
            style={[
              styles.button,
              styles.increaseButton,
              count >= 20 && styles.disabledButton,
            ]}
            onPress={() => {
              if (count < 20) {
                setCount(count + 1);
                setIncreasePresses(increasePresses + 1);
                setMessage('');
              }
            }}
          >
            <Text style={styles.buttonText}>
              + Increase
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.decreaseButton]}
            onPress={() => {
              setCount(Math.max(0, count - 1));
              setMessage('');
            }}
          >
            <Text style={styles.buttonText}>
              − Decrease
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.resetButton]}
            onPress={() => {
              setCount(0);
              setMessage('Counter reset!');
            }}
          >
            <Text style={styles.buttonText}>
              ↻ Reset
            </Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          Maximum count: 20
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF2FF',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 24,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#172554',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
    marginBottom: 24,
  },

  counterBox: {
    width: '100%',
    backgroundColor: '#EFF6FF',
    borderRadius: 18,
    paddingVertical: 22,
    alignItems: 'center',
  },

  counterLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#64748B',
  },

  count: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#2563EB',
    marginVertical: 6,
  },

  hint: {
    fontSize: 15,
    color: '#475569',
  },

  clicks: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 14,
  },

  success: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#15803D',
    marginTop: 14,
  },

  message: {
    fontSize: 15,
    fontWeight: '600',
    color: '#15803D',
    marginTop: 12,
  },

  buttons: {
    width: '100%',
    marginTop: 24,
    gap: 12,
  },

  button: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  increaseButton: {
    backgroundColor: '#2563EB',
  },

  decreaseButton: {
    backgroundColor: '#DC2626',
  },

  resetButton: {
    backgroundColor: '#16A34A',
  },

  disabledButton: {
    opacity: 0.45,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  footer: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 22,
  },
});
