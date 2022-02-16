import express from "express";
import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User ${user.firstName} added to the database.`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send("User has been deleted");
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const updatedUser = users.find((user) => user.id === id);

  if (firstName) {
    updatedUser.firstName = firstName;
  }

  if (lastName) {
    updatedUser.lastName = lastName;
  }

  if (age) {
    updatedUser.age = age;
  }

  res.send("User has been updated");
};
