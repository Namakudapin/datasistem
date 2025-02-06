import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const DatePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const months = ["January", "February", "March", "April", "May", "June", 
                 "July", "August", "September", "October", "November", "December"];
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysArray = [];
    
    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.unshift(new Date(year, month, -i));
    }
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Date(year, month, i));
    }
    
    const remainingDays = 42 - daysArray.length;
    for (let i = 1; i <= remainingDays; i++) {
      daysArray.push(new Date(year, month + 1, i));
    }
    
    return daysArray;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleClear = () => {
    setSelectedDate(null);
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedDate(today);
    setCurrentMonth(today);
    setShowCalendar(false);
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="relative w-64">
      {/* Tombol pemicu yang berubah menjadi teks tanggal jika ada tanggal yang dipilih */}
      <div 
        className="flex items-center justify-between p-3 cursor-pointer text-gray-800 text-xs font-poppins"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {selectedDate ? (
          <span>{formatDate(selectedDate)}</span>
        ) : (
          <Calendar className="w-5 h-5 text-gray-400" />
        )}
      </div>

      {showCalendar && (
        <div className="absolute mt-2 p-4 bg-gray-800 rounded-lg shadow-lg w-64 z-50">
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="text-gray-400 hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-white font-medium">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button onClick={handleNextMonth} className="text-gray-400 hover:text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {days.map(day => (
              <div key={day} className="text-center text-gray-400 text-sm">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentMonth).map((date, index) => {
              const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
              const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
              const isToday = date.toDateString() === new Date().toDateString();

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className={`p-1 text-sm rounded-full w-8 h-8
                    ${isCurrentMonth ? 'text-white' : 'text-gray-600'}
                    ${isSelected ? 'bg-blue-600' : ''}
                    ${!isSelected && isToday ? 'text-blue-400' : ''}
                    hover:bg-gray-700`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={handleToday}
              className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700"
            >
              Today
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-700 text-white px-4 py-1 rounded-md text-sm hover:bg-gray-600"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
