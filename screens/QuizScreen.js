import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { AppLoading } from "expo";

const apiUrl =
  "https://opentdb.com/api.php?amount=10&category=18&type=multiple";

class QuizScreen extends React.Component {
  state = {
    currentQuestion: 0,
    isLoaded: false,
    questions: [],
    ansOptions: [],
    correctAnswer: "",
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  async fetchQuestions() {
    await fetch(apiUrl)
      .then((result) => {
        result.json().then((resultJSON) => {
          console.log(resultJSON);

          const options =
            resultJSON.results[this.state.currentQuestion].incorrect_answers;
          const correctAnswer =
            resultJSON.results[this.state.currentQuestion].correct_answer;
          options.push(correctAnswer);

          console.log(options);

          this.setState({
            isLoaded: true,
            questions: resultJSON.results,
            ansOptions: options,
            correctAnswer: correctAnswer,
            score: 0,
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  checkAnswer(selectedAnswer) {
    if (this.state.correctAnswer === selectedAnswer) {
      let score = this.state.score;
      score += 1;

      this.setState({
        score,
      });
      console.log("its correct");
    } else {
      console.log("Not");
    }

    //Change Question
    let currentQuestion = this.state.currentQuestion;
    currentQuestion = currentQuestion + 1;

    if (currentQuestion <= this.state.questions.length -1 ) {
      
      const options =
        this.state.questions[currentQuestion].incorrect_answers;

      const correctAnswer =
        this.state.questions[currentQuestion].correct_answer;

        options.push(correctAnswer)

        this.setState({
          currentQuestion,
          ansOptions: options,
          correctAnswer : correctAnswer
        })
    }else{
      this.props.navigation.navigate("resultscreen",{
        score : this.state.score
      })
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {" "}
            Q.{" "}
            {this.state.isLoaded ? (
              this.state.questions[this.state.currentQuestion].question
            ) : (
              <ActivityIndicator />
            )}
          </Text>
        </View>

        <View style={styles.answerContainer}>
          <TouchableOpacity
            onPress={() => {
              this.checkAnswer(this.state.ansOptions[0]);
            }}
            style={styles.button}
          >
            <Text style={styles.answerText}>{this.state.ansOptions[0]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.checkAnswer(this.state.ansOptions[1]);
            }}
            style={styles.button}
          >
            <Text style={styles.answerText}>{this.state.ansOptions[1]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.checkAnswer(this.state.ansOptions[2]);
            }}
            style={styles.button}
          >
            <Text style={styles.answerText}>{this.state.ansOptions[2]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.checkAnswer(this.state.ansOptions[3]);
            }}
            style={styles.button}
          >
            <Text style={styles.answerText}>{this.state.ansOptions[3]}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#301b75",
  },
  questionContainer: {
    marginHorizontal: 30,
    marginVertical: 100,
    // marginTop: 50
  },
  question: {
    fontSize: 30,
    color: "#ffffff",
    textAlign: "center",
  },
  answerContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#602bc2",
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default QuizScreen;
