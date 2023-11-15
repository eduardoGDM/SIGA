// components/TextAreaComponent.js
"use client";
// components/DynamicTextArea.js

import { useState } from "react";

export default function TextArea() {
	const [textAreas, setTextAreas] = useState([]);

	const handleAddButtonClick = () => {
		setTextAreas([...textAreas, { id: Date.now(), value: "" }]);
	};

	const handleTextAreaChange = (id, value) => {
		const updatedTextAreas = textAreas.map((textarea) =>
			textarea.id === id ? { ...textarea, value } : textarea
		);
		setTextAreas(updatedTextAreas);
	};

	const handleRemoveButtonClick = (id) => {
		const updatedTextAreas = textAreas.filter((textarea) => textarea.id !== id);
		setTextAreas(updatedTextAreas);
	};

	return (
		<div>
			<button
				onClick={handleAddButtonClick}
				className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
				Adicionar Textarea
			</button>
			{textAreas.map((textarea) => (
				<div key={textarea.id} className="mt-4">
					<textarea
						value={textarea.value}
						onChange={(e) => handleTextAreaChange(textarea.id, e.target.value)}
						className="p-2 border rounded"
					/>
					<button
						onClick={() => handleRemoveButtonClick(textarea.id)}
						className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-2">
						Remover Textarea
					</button>
				</div>
			))}
		</div>
	);
}
