import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  View,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Alert,
} from "react-native";
import { initializeParse, useParseQuery } from "@parse/react-native";
import GlobalStyles from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
initializeParse(
  "https://evolt.b4a.io/",
  "wHWGLMOQHkbFP6U6Itx6si80EAvz7BNm0H1F8iWz",
  "YAlqf986EfsLRHuqILOH5nRR8iKb6RtOEUzA4VZC"
);

const ProfileExpenses = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ExpenseCategory, setCategory] = useState("");
  const [ExpenseAmount, setAmount] = useState("");
  const [ExpenseFrequency, setFrequency] = useState();

  const [ExpenseDueDate, setExpenseDueDate] = useState(new Date());

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  // Reading parse objects is done by using Parse.Query
  const parseQuery = new Parse.Query("Expenses");
  const results = [];
  const query = parseQuery.find().then(
    (results) => {
      // Do something with the results
      return (
        <ScrollView>
          <View>
            {results !== null &&
              results !== undefined &&
              results.map((expense) => {
                <View style={[styles.expenseList, styles.expenseLayout]}>
                  <SafeAreaView
                    style={[
                      styles.expenseListChild,
                      styles.expenseLayout,
                      styles.childPosition,
                    ]}
                  />
                  <View style={styles.expenseDetails}>
                    <Text
                      style={[styles.expenseName, styles.expenseTypo]}
                      numberOfLines={1}
                    >
                      {expense.get("Exp_Category")}
                    </Text>
                    <Text
                      style={[
                        styles.expenseDueDate,
                        styles.mt7,
                        styles.textTypo,
                        styles.totalExpensesTypo,
                      ]}
                      numberOfLines={1}
                    >
                      {expense.get("Exp_Due_Date").toDateString()}
                    </Text>
                  </View>
                  <SafeAreaView
                    style={[styles.emojiContainer, styles.emojiContainerLayout]}
                  >
                    <Image
                      style={[
                        styles.emojiContainerLayout,
                        styles.childPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-678.png")}
                    />
                    <Image
                      style={[styles.moneyWithWings, styles.dollarCircleLayout]}
                      resizeMode="cover"
                      source={require("../assets/money-with-wings.png")}
                    />
                  </SafeAreaView>
                  <View style={styles.editButtonsParent}>
                    <Image
                      style={styles.vectorIconLayout}
                      resizeMode="cover"
                      source={require("../assets/edit-buttons.png")}
                    />
                    <Text
                      style={[
                        styles.expenseAmount,
                        styles.mt7,
                        styles.expenseTypo,
                      ]}
                    >
                      ${expense.get("Exp_Amount")}
                    </Text>
                  </View>
                </View>;
              })}
          </View>
        </ScrollView>
      );
    },
    (error) => {
      // Handle the error
      console.error(error);
    }
  );
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setExpenseDueDate(date);
    hideDatePicker();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCategory("");
    setAmount("");
    setFrequency("");
  };

  return (
    <>
      <SafeAreaView style={styles.profileexpenses}>
        <SafeAreaView
          style={[styles.profileexpensesChild, styles.childPosition]}
        />
        <StatusBar
          style={styles.tabNavBarPosition}
          barStyle="dark-content"
          backgroundColor="#3146f9"
        />
        <Text
          style={[styles.header, styles.textTypo, styles.textTypo1]}
          numberOfLines={1}
        >
          Outcome-Source
        </Text>
        <SafeAreaView style={styles.overview}>
          <View style={styles.frameParent}>
            <View style={styles.dollarCircleParent}>
              <View style={[styles.dollarCircle, styles.dollarCircleLayout]}>
                <View
                  style={[
                    styles.vectorIcon3Position,
                    styles.vectorIcon3Position1,
                  ]}
                >
                  <View style={styles.vectorIcon3Position1}>
                    <Image
                      style={[styles.vectorIcon, styles.vectorIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/vector.png")}
                    />
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/vector1.png")}
                    />
                    <Image
                      style={[styles.vectorIcon2, styles.vectorIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/vector2.png")}
                    />
                    <Image
                      style={[
                        styles.vectorIcon3,
                        styles.vectorIconLayout,
                        styles.vectorIcon3Position,
                        styles.vectorIcon3Position1,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/vector3.png")}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={[
                  styles.totalExpenses,
                  styles.ml1,
                  styles.textTypo,
                  styles.totalExpensesTypo,
                ]}
              >
                Total Expenses
              </Text>
            </View>
            <Text
              style={[
                styles.text,
                styles.mt2,
                styles.textTypo,
                styles.textTypo1,
              ]}
            >
              $4533
            </Text>
          </View>
        </SafeAreaView>
        {query}

        <Image
          style={[styles.arrowsIcon, styles.arrowsIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrows.png")}
        />
        <View style={[styles.tabNavBar, styles.tabNavBarPosition]}>
          <View style={[styles.tabBarButtons, styles.vectorIcon3Position]}>
            <Image
              style={styles.homeButtonTabBarIcon}
              resizeMode="cover"
              source={require("../assets/home-button-tab-bar.png")}
            />
            <Image
              style={[styles.homeButtonTabBarIcon, styles.ml87]}
              resizeMode="cover"
              source={require("../assets/timesheet-button-tab-bar.png")}
            />
            <Image
              style={[styles.homeButtonTabBarIcon, styles.ml87]}
              resizeMode="cover"
              source={require("../assets/wallet-button-tab-bar.png")}
            />
            <Image
              style={[styles.profileButtonTabBarIcon, styles.ml87]}
              resizeMode="cover"
              source={require("../assets/profile-button-tab-bar.png")}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.addButtonIcon} onPress={openModal}>
          <Image
            resizeMode="cover"
            source={require("../assets/add-button.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  ml1: {
    marginLeft: 1,
  },
  mt2: {
    marginTop: 2,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  ml87: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  tabNavBarPosition: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.archivo,
  },
  textTypo1: {
    color: GlobalStyles.Color.white,

    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.archivo,
  },
  dollarCircleLayout: {
    width: 23,
    height: 23,
  },
  vectorIcon3Position1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIcon3Position: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  totalExpensesTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.archivo,
  },
  expenseLayout: {
    height: 81,
    width: "97%",
  },
  expenseTypo: {
    textAlign: "left",
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.archivo,
  },
  emojiContainerLayout: {
    height: 41,
    width: 41,
    position: "absolute",
  },
  arrowsIconPosition: {
    left: 17,
    position: "absolute",
  },
  profileexpensesChild: {
    backgroundColor: "#3146f9",
    width: 428,
    height: 199,
    position: "absolute",
  },
  header: {
    top: 66,
    left: 148,
    fontSize: 16,
    lineHeight: 16,
    position: "absolute",
  },
  vectorIcon: {
    height: "11.88%",
    width: "7.67%",
    top: "54.46%",
    right: "39.21%",
    bottom: "33.67%",
    left: "53.13%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "83.33%",
    width: "83.33%",
    top: "7.92%",
    right: "8.33%",
    bottom: "8.75%",
    left: "8.33%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "11.92%",
    width: "7.62%",
    top: "33.67%",
    right: "53.12%",
    bottom: "54.42%",
    left: "39.25%",
    position: "absolute",
  },
  vectorIcon3: {
    opacity: 0,
  },
  dollarCircle: {
    height: 23,
  },
  totalExpenses: {
    fontSize: 13,
    lineHeight: 13,
    color: "rgba(255, 255, 255, 0.91)",
  },
  dollarCircleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    lineHeight: 24,
  },
  frameParent: {
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  overview: {
    top: 124,
    left: 158,
    width: 113,
    height: 49,
    position: "absolute",
  },
  expenseListChild: {
    borderRadius: GlobalStyles.Border.br_md,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 44,
    elevation: 44,
    shadowOpacity: 10,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
    width: 396,
    left: 0,
  },
  expenseName: {
    fontSize: GlobalStyles.FontSize.size_lg,
    color: GlobalStyles.Color.black,
  },
  expenseDueDate: {
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 14,
    color: GlobalStyles.Color.gray_100,
  },
  expenseDetails: {
    top: 18,
    left: 64,
    position: "absolute",
  },
  moneyWithWings: {
    top: 10,
    left: 8,
    height: 23,
    position: "absolute",
  },
  emojiContainer: {
    top: 20,
    left: 13,
  },
  expenseAmount: {
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.green,
  },
  editButtonsParent: {
    top: 25,
    left: 319,
    alignItems: "flex-end",
    position: "absolute",
  },
  expenseList: {
    top: 227,
    left: 16,
    position: "absolute",
    width: "80%",
  },
  expenseList1: {
    top: 326,
  },
  arrowsIcon: {
    top: 62,
    width: 29,
    height: 23,
  },
  homeButtonTabBarIcon: {
    height: 24,
    width: 24,
  },
  profileButtonTabBarIcon: {
    height: 37,
    width: 24,
  },
  tabBarButtons: {
    bottom: 2,
    paddingHorizontal: 16,
    paddingVertical: 27,
    justifyContent: "center",
    left: "0%",
    right: "0%",
    flexDirection: "row",
    alignItems: "center",
  },
  tabNavBar: {
    bottom: 0,
    backgroundColor: "#f3f3f3",
    height: 82,
  },
  addButtonIcon: {
    right: 11,
    bottom: 64,
    width: 82,
    height: 96,
    position: "absolute",
  },
  profileexpenses: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ProfileExpenses;
