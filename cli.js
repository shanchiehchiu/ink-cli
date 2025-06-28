#!/usr/bin/env node
import React, { useState } from 'react';
import { render, Text } from 'ink';
import TextInput from 'ink-text-input';

const App = () => {
	const [name, setName] = useState('');
	const [submitted, setSubmitted] = useState(false);

	return (
		<>
			{!submitted ? (
				<>
					<Text>請輸入你的名字：</Text>
					<TextInput
						value={name}
						onChange={setName}
						onSubmit={() => setSubmitted(true)}
					/>
				</>
			) : (
				<Text color="green">嗨，{name}！歡迎使用這個 CLI 🎉</Text>
			)}
		</>
	);
};

render(<App />);
