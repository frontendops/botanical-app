import React, { Component } from 'react'

export const FileInput = ({
  floatingLabelText,
  fullWidth,
  input,
  label,
  meta: { touched, error },
  ...custom }) => {
  if (input.value && input.value[0] && input.value[0].name) {
    floatingLabelText = input.value[0].name;
  }
  delete input.value;
  return (
    <input
      type="file"
      {...input}
      {...custom}
    />
  )
}