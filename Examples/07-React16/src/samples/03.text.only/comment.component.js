import React, { Component } from 'react';

export const Comment = ({ text }) => {
  const emojiText = text
    .replace(':)', '😊')
    .replace(':D', '😀')
    .replace(':(', '🙁');

  return emojiText;
};