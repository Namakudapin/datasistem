"use client";

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileDown, ChevronLeft, ChevronRight } from 'lucide-react';

const DashboardPage = () => {
    const [selectedYear, setSelectedYear] = useState(2024);
    const [data, setData] = useState([]);

    const generateData = (year) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months.map(month => ({
            name: month,
            projects: Math.floor(Math.random() * 50) + 20
        }));
    };

    useEffect(() => {
        setData(generateData(selectedYear)); 
    }, [selectedYear]);

    const totalProjects = data.reduce((sum, item) => sum + item.projects, 0);

    const handlePreviousYear = () => {
        setSelectedYear(prev => prev - 1);
    };

    const handleNextYear = () => {
        setSelectedYear(prev => prev + 1);
    };

    const handleExport = () => {
        console.log('Exporting to Excel...');
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6 pt-20 overflow-x-hidden">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-semibold mb-4 text-gray-800">Good afternoon, Haidar</h1>
                
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Project Analytics
                        </h2>
                        <button 
                            className="px-4 py-2 bg-[#00704A] text-white rounded-lg hover:bg-[#00513A] transition-colors flex items-center gap-2"
                            onClick={handleExport}
                        >
                            <FileDown className="h-4 w-4" />
                            Export Excel
                        </button>
                    </div>

                    <div className="grid gap-4">
                        <div className="bg-[#00704A] rounded-lg p-6 text-white">
                            <h3 className="text-lg font-medium opacity-90">Total Projects</h3>
                            <p className="text-3xl font-bold mt-2">{totalProjects}</p>
                            <p className="text-sm opacity-75 mt-1">Active projects in {selectedYear}</p>
                        </div>

                        <div className="flex items-center justify-center gap-4 my-4">
                            <button
                                onClick={handlePreviousYear}
                                className="p-2 border border-[#00704A] text-[#00704A] rounded-lg hover:bg-[#00704A] hover:text-white transition-colors"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <span className="text-lg font-semibold text-gray-700">{selectedYear}</span>
                            <button
                                onClick={handleNextYear}
                                className="p-2 border border-[#00704A] text-[#00704A] rounded-lg hover:bg-[#00704A] hover:text-white transition-colors"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Chart */}
                        <div className="h-[400px] mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                    <XAxis 
                                        dataKey="name" 
                                        stroke="#6b7280"
                                        tick={{ fill: '#6b7280' }}
                                    />
                                    <YAxis 
                                        stroke="#6b7280"
                                        tick={{ fill: '#6b7280' }}
                                    />
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: '#fff',
                                            border: '1px solid #e5e7eb'
                                        }}
                                    />
                                    <Line 
                                        type="monotone" 
                                        dataKey="projects" 
                                        stroke="#00704A"
                                        strokeWidth={2}
                                        dot={{ fill: '#00704A', strokeWidth: 2 }}
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
