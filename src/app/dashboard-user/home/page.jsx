import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <div className="mb-8">
                <h1 className="font-bold text-black">Selamat datang, user</h1>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[calc(100%-2rem)]">
                    <h2 className="text-xl font-semibold text-black">My Work</h2>
                    <p className="text-black">Some recent activities or updates.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[calc(100%-2rem)]">
                    <h2 className="text-xl font-semibold text-black">Agenda</h2>
                    <p className="text-black">Upcoming events or tasks.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
