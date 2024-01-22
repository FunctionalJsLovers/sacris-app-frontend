'use client';
import React from "react";
import styles from './styles.module.css'
import jsonData from "@/components/Questions/questions.json";

const Questions = () => {
    const questionsData = jsonData;

    return (
        <div className={styles.allQuestions}>
            {questionsData.map((question, index) => (
                <div className={styles.question} key={index}>
                    <h1>{question.question}</h1>
                    <div className={styles.answer}>
                        <p>{question.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Questions;
