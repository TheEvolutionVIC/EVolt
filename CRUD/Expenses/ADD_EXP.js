import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
//Initializing the SDK.
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys
Parse.initialize(
  "wHWGLMOQHkbFP6U6Itx6si80EAvz7BNm0H1F8iWz",
  "YAlqf986EfsLRHuqILOH5nRR8iKb6RtOEUzA4VZC"
);
Parse.serverURL = "https://parseapi.back4app.com/";

const ADD_EXP = (Category, Amount, DueDate, Frequency, User, UserID) => {
  let createExpense = async () => {
    const Expense = new Parse.Object("Expenses");
    Expense.set("Exp_Category", Category);
    Expense.set("Exp_Amount", Number(Amount));
    Expense.set("Exp_Due_Date", new Date(DueDate));
    Expense.set("Frequency", Frequency);
    try {
      const result = await Expense.save();
      // Access the Parse Object attributes using the .GET method
      console.log("Expenses created", result);
    } catch (error) {
      console.error("Error while creating Expenses: ", error);
    }
  };
  return createExpense();
};

export default ADD_EXP;
