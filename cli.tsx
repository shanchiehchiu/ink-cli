#!/usr/bin/env node
// 指定此檔案可直接以 node 執行（Shebang）

import React, { useState } from 'react';
// 引入 React 及 useState Hook

import { render, Text, Box, Newline } from 'ink';
// 引入 ink 的 render、Text、Box、Newline

import TextInput from 'ink-text-input';
// 引入 ink-text-input，提供 CLI 文字輸入元件

import Gradient from 'ink-gradient';
// ink-gradient 可產生 CLI 漸層色彩
import BigText from 'ink-big-text';
// ink-big-text 可產生大型 ASCII 藝術字

const App = () => {
	// App 主元件，負責 CLI 互動流程

	const [name, setName] = useState('');
	// name 狀態：儲存使用者輸入的名字

	const [submitted, setSubmitted] = useState(false);
	// submitted 狀態：追蹤是否已送出名字

	return (
		<>
			<Gradient name="rainbow">
				<BigText text="CLI DEMO" />
			</Gradient>
			<Newline />
			{!submitted ? (
				// 尚未送出時顯示輸入介面
				<Box flexDirection="column" borderStyle="round" borderColor="cyan" padding={1}>
					<Text color="cyan">✨ 請輸入你的名字，開啟專屬互動之旅！</Text>
					<Newline />
					<TextInput
						value={name}
						// 綁定輸入值到 name 狀態
						onChange={setName}
						// 當輸入變動時更新 name
						onSubmit={() => setSubmitted(true)}
						// 按下 Enter 時設定為已送出
					/>
				</Box>
			) : (
				// 已送出時顯示歡迎訊息
				<Box flexDirection="column" borderStyle="double" borderColor="green" padding={1}>
					<Text color="green">
						🎉 歡迎，{name}！<Newline />
						🚀 這是你的專屬 CLI 展示空間！
					</Text>
					<Newline />
					<Text color="yellow">🌈 祝你有個美好的一天！</Text>
				</Box>
			)}
		</>
	);
};

render(<App />);
// 將 App 元件渲染到終端機
