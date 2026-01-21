import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const resultData = [
  { "id": 1, "name": "Student 1", "physics": 78, "chemistry": 82, "math": 90 },
  { "id": 2, "name": "Student 2", "physics": 85, "chemistry": 88, "math": 92 },
  { "id": 3, "name": "Student 3", "physics": 67, "chemistry": 70, "math": 75 },
  { "id": 4, "name": "Student 4", "physics": 90, "chemistry": 91, "math": 89 },
  { "id": 5, "name": "Student 5", "physics": 72, "chemistry": 68, "math": 74 },
  { "id": 6, "name": "Student 6", "physics": 88, "chemistry": 85, "math": 91 },
  { "id": 7, "name": "Student 7", "physics": 60, "chemistry": 65, "math": 70 },
  { "id": 8, "name": "Student 8", "physics": 95, "chemistry": 93, "math": 97 },
  { "id": 9, "name": "Student 9", "physics": 80, "chemistry": 78, "math": 85 },
  { "id": 10, "name": "Student 10", "physics": 69, "chemistry": 72, "math": 68 }
];

const ResultChart = () => {
    return (
        <div className="w-full h-96 bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
            <h3 className="text-xl font-semibold mb-4">Student Scores</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={resultData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-15} height={60} textAnchor="end" interval={0} />
                    <YAxis tick={{ fontSize: 12 }} domain={[50, 100]} />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line type="monotone" dataKey="math" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey="chemistry" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultChart;