@echo off
REM This script sets up the folder structure and creates files for the Ugbekun SMSUP+ frontend demo.
REM It assumes you have already run the initial Vite and Tailwind setup commands
REM and are running this script from within the ugbekun-smsup project folder.

echo Setting up Ugbekun SMSUP+ frontend demo...

REM Create necessary directories inside src
echo Creating directories...
mkdir src\cardano
mkdir src\components
mkdir src\contexts
mkdir src\data
mkdir src\pages

echo Directories created.

REM Create and populate files

REM src\data\simulatedData.js
echo Creating src\data\simulatedData.js...
(
echo // src\data\simulatedData.js
echo.
echo // This file contains placeholder data to simulate the different user roles and their information.
echo // In a real application, this data would come from a backend API or blockchain queries.
echo.
echo export const simulatedData = {
echo     admin: {
echo         schoolName: "Ugbekun Demonstration School",
echo         totalStudents: 550,
echo         totalTeachers: 35,
echo         issuedNFTs: 850, // Total certificates/awards issued on the blockchain (simulated)
echo         totalTokensEarned: 150000, // Total tokens earned by students/teachers in the system (simulated)
echo         recentActivity: [
echo             { type: "Certificate Issued", details: "Primary 6 Completion - Student ID 101", date: "2025-05-10" },
echo             { type: "Tokens Awarded", details: "Teacher ID 205 - Performance Bonus", date: "2025-05-08" },
echo             { type: "Fee Payment Received", details: "Student ID 115 - Term 3 Fees", date: "2025-05-05" },
echo              { type: "New Student Enrolled", details: "Student ID 151 - Primary 1", date: "2025-05-01" },
echo              { type: "Certificate Issued", details: "Academic Excellence Award - Student ID 101", date: "2025-04-28" },
echo         ]
echo     },
echo     teacher: {
echo         name: "Mrs. Adebayo",
echo         subject: "Mathematics",
echo         classes: ["JSS 1", "JSS 2", "JSS 3"],
echo         did: "did:prism:teacher12345...", // Simulated Decentralized Identity
echo         performanceMetrics: {
echo             avgStudentImprovement: "15%%",
echo             classAttendance: "95%%",
echo             curriculumCompletion: "100%%",
echo         },
echo         tokenBalance: 5500, // Simulated total tokens earned
echo         tokenHistory: [
echo             { date: "2025-05-20", amount: 500, description: "Student Performance Bonus (Term 2)" },
echo             { date: "2025-04-15", amount: 1000, description: "Quarterly Performance Reward" },
echo              { date: "2025-03-10", amount: 200, description: "Successful Curriculum Delivery JSS3" },
echo              { date: "2025-01-05", amount: 800, description: "Start of Term 1 Bonus" },
echo         ],
echo          managedStudents: [
echo              { id: 101, name: "Kwame Nkrumah", grade: "JSS 3", performance: "Excellent" },
echo              { id: 105, name: "Aisha Khan", grade: "JSS 2", performance: "Good" },
echo              { id: 110, name: "Segun Adeyemi", grade: "JSS 1", performance: "Average" },
echo              { id: 122, name: "Fatima Bello", grade: "JSS 3", performance: "Very Good" },
echo              { id: 130, name: "Chinedu Eze", grade: "JSS 2", performance: "Needs Improvement" },
echo          ]
echo     },
echo     student: {
echo         name: "Kwame Nkrumah",
echo         grade: "JSS 3",
echo         did: "did:prism:student67890...", // Simulated Decentralized Identity
echo         academicTimeline: [
echo             { year: "2020", event: "Started Primary 1" },
echo             { year: "2021", event: "Completed Primary 2, Earned 500 Tokens" },
echo             { year: "2022", event: "Completed Primary 3, Earned 600 Tokens, Awarded 'Most Diligent' (NFT)" },
echo             { year: "2023", event: "Completed Primary 4, Earned 750 Tokens" },
echo             { year: "2024", event: "Completed Primary 5, Earned 900 Tokens, Awarded 'Academic Excellence' (NFT)" },
echo             { year: "2025", event: "Started JSS 1" }, // Assuming JSS starts after Primary 5
echo             { year: "2025", event: "Completed JSS 1 Term 1, Earned 200 Tokens" },
echo             { year: "2025", event: "Completed JSS 1 Term 2, Earned 250 Tokens" },
echo         ],
echo         certificates: [
echo             { id: 1, title: "Primary School Completion", year: 2024, type: "NFT", imageUrl: "https://placehold.co/150x100/AED6F1/000?text=Cert+NFT+1" },
echo             { id: 2, title: "Academic Excellence Award", year: 2024, type: "NFT", imageUrl: "https://placehold.co/150x100/A9CCE3/000?text=Award+NFT+1" },
echo              { id: 3, title: "Most Diligent Student", year: 2022, type: "NFT", imageUrl: "https://placehold.co/150x100/C3E6CB/000?text=Award+NFT+2" },
echo         ],
echo         tokenBalance: 2750 + 200 + 250, // Updated total tokens earned based on timeline
echo         tokenHistory: [
echo             { date: "2025-05-15", amount: 250, description: "Completed JSS 1 Term 2" },
echo             { date: "2025-03-20", amount: 200, description: "Completed JSS 1 Term 1" },
echo             { date: "2024-12-15", amount: 900, description: "Completed Primary 5" },
echo             { date: "2024-12-10", amount: 100, description: "Perfect Attendance Term 3 (Primary 5)" },
echo              { date: "2024-07-15", amount: 750, description: "Completed Primary 4" },
echo              { date: "2023-12-15", amount: 600, description: "Completed Primary 3" },
echo              { date: "2022-12-15", amount: 500, description: "Completed Primary 2" },
echo         ],
echo          feesPaid: [
echo              { term: "Term 1, 2025", amount: 50000, status: "Paid", date: "2025-01-10" },
echo              { term: "Term 2, 2025", amount: 50000, status: "Paid", date: "2025-04-05" },
echo              { term: "Term 3, 2025", amount: 50000, status: "Pending", date: "2025-07-01" }, // Example of pending
echo          ]
echo     },
echo     // You could add a 'parent' object here if you wanted a parent view
echo };
) > src\data\simulatedData.js

REM src\pages\LoginScreen.jsx
echo Creating src\pages\LoginScreen.jsx...
(
echo // src\pages\LoginScreen.jsx
echo import React, { useState } from 'react';
echo.
echo // This component renders the login screen where the user selects their role.
echo.
echo const LoginScreen = ({ onLogin }) => {
echo     const [selectedRole, setSelectedRole] = useState(''); // State to hold the selected role
echo.
echo     // Function to handle the login button click
echo     const handleLogin = () => {
echo         if (selectedRole) {
echo             // Call the onLogin function passed from the parent (App component)
echo             onLogin(selectedRole);
echo         } else {
echo             // Show an alert if no role is selected (using alert for simplicity in demo)
echo             alert('Please select a role.');
echo         }
echo     };
echo.
echo     return (
echo         // Main container to center the login box
echo         ^<div className="flex items-center justify-center min-h-screen bg-gray-200"^>
echo             {/* Login box with white background, padding, rounded corners, and shadow */}
echo             ^<div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center"^>
echo                 {/* Title */}
echo                 ^<h2 className="text-2xl font-bold mb-6 text-gray-800"^>Login to SMSUP+^</h2^>
echo.
echo                 {/* Role selection dropdown */}
echo                 ^<div className="mb-4"^>
echo                     ^<label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2"^>Select Your Role:^</label^>
echo                     ^<select
echo                         id="role"
echo                         className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
echo                         value={selectedRole} // Bind the value to the state
echo                         onChange={(e) =^> setSelectedRole(e.target.value)} // Update state when selection changes
echo                     ^>
echo                         ^<option value=""^>-- Select Role --^</option^>
echo                         ^<option value="admin"^>School Administrator^</option^>
echo                         ^<option value="teacher"^>Teacher^</option^>
echo                         ^<option value="student"^>Student^</option^>
echo                         {/* You could add 'parent' here later if needed */}
echo                     ^</select^>
echo                 ^</div^>
echo.
echo                 {/* Simulated Login Button */}
echo                 ^<button
echo                     onClick={handleLogin} // Call handleLogin when clicked
echo                     className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
echo                 ^>
echo                     Login (Simulated)
echo                 ^</button^>
echo.
echo                  {/* Disclaimer text */}
echo                  ^<p className="text-sm text-gray-500 mt-4"^>This is a frontend demo. No real authentication is performed.^</p^>
echo             ^</div^>
echo         ^</div^>
echo     );
echo };
echo.
echo export default LoginScreen;
) > src\pages\LoginScreen.jsx

REM src\pages\AdminDashboard.jsx
echo Creating src\pages\AdminDashboard.jsx...
(
echo // src\pages\AdminDashboard.jsx
echo import React from 'react';
echo.
echo // Using inline SVGs for icons (ensure these are defined or imported if used elsewhere)
echo // These icons are simple graphical representations for the quick action buttons.
echo const AwardIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<circle cx="12" cy="8" r="7"/\>^<path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"/\>^</svg>^>);
echo const DollarSignIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<line x1="12" y1="1" x2="12" y2="23"/\>^<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/\>^</svg>^>);
echo.
echo.
echo // This component renders the dashboard view for the School Administrator.
echo // It displays key metrics and recent activity.
echo.
echo const AdminDashboard = ({ data }) =^> (
echo     // Main container with padding, background color, rounded corners, and shadow
echo     ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo         {/* Page Title */}
echo         ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Admin Dashboard^</h2^>
echo.
echo         {/* Grid layout for dashboard cards */}
echo         ^<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"^>
echo             {/* School Overview Card */}
echo             ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>School Overview^</h3^>
echo                 ^<p className="text-gray-600"^>School Name: ^<span className="font-medium text-gray-800"^>{data.schoolName}^</span^>^</p^>
echo                 ^<p className="text-gray-600"^>Total Students: ^<span className="font-medium text-gray-800"^>{data.totalStudents}^</span^>^</p^>
echo                 ^<p className="text-gray-600"^>Total Teachers: ^<span className="font-medium text-gray-800"^>{data.totalTeachers}^</span^>^</p^>
echo             ^</div^>
echo.
echo             {/* Blockchain Metrics Card (Simulated) */}
echo             ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Blockchain Metrics (Simulated)^</h3^>
echo                 ^<p className="text-gray-600"^>Issued NFTs (Certificates/Awards): ^<span className="font-medium text-gray-800"^>{data.issuedNFTs}^</span^>^</p^>
echo                 ^<p className="text-gray-600"^>Total Tokens Earned in System: ^<span className="font-medium text-gray-800"^>{data.totalTokensEarned}^</span^>^</p^>
echo                  ^<p className="text-sm text-gray-500 mt-2"^>Represents total assets minted and distributed on Cardano.^</p^>
echo             ^</div^>
echo.
echo              {/* Quick Actions Card (Simulated) */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1"^> {/* This card spans columns on medium/large screens */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Quick Actions (Simulated)^</h3^>
echo                  {/* Simulated buttons for common actions */}
echo                 ^<button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out mb-3 flex items-center justify-center"^>
echo                     ^<AwardIcon className="mr-2"/\>^ Issue Certificate (Simulated)
echo                 ^</button^>
echo                 ^<button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 ease-in-out flex items-center justify-center"^>
echo                     ^<DollarSignIcon className="mr-2"/\>^ Award Tokens (Simulated)
echo                 ^</button^>
echo             ^</div^>
echo.
echo              {/* Recent System Activity Card */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3"^> {/* This card spans across all columns */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Recent System Activity (Simulated)^</h3^>
echo                  {/* List of recent activities */}
echo                 ^<ul className="divide-y divide-gray-200"^>
echo                     {data.recentActivity.map((activity, index) =^> (
echo                         ^<li key={index} className="py-3 text-gray-600 text-sm"^>
echo                             ^<span className="font-medium"^>{activity.date}:^</span^> {activity.type} - {activity.details}
echo                         ^</li^>
echo                     ))}
echo                 ^</ul^>
echo             ^</div^>
echo         ^</div^>
echo     ^</div^>
echo );
echo.
echo export default AdminDashboard;
) > src\pages\AdminDashboard.jsx

REM src\pages\TeacherDashboard.jsx
echo Creating src\pages\TeacherDashboard.jsx...
(
echo // src\pages\TeacherDashboard.jsx
echo import React from 'react';
echo.
echo // Using inline SVGs for icons (ensure these are defined or imported if used elsewhere)
echo // These icons are simple visual aids for the buttons.
echo const WalletIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4v-3"/\>^<path d="M17 20v-2a2 2 0 0 0-2-2H5"/\>^</svg>^>);
echo const DollarSignIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<line x1="12" y1="1" x2="12" y2="23"/\>^<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/\>^</svg>^>);
echo.
echo.
echo // This component renders the dashboard view for a Teacher.
echo // It displays teacher-specific information, performance metrics, and token balance.
echo.
echo const TeacherDashboard = ({ teacher }) =^> (
echo      // Main container with padding, background color, rounded corners, and shadow
echo      ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo         {/* Page Title */}
echo         ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Teacher Dashboard: {teacher.name}^</h2^>
echo.
echo         {/* Grid layout for dashboard cards */}
echo         ^<div className="grid grid-cols-1 md:grid-cols-2 gap-6"^>
echo              {/* Basic Information Card */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Basic Information^</h3^>
echo                 ^<p className="text-gray-600"^>Subject: ^<span className="font-medium text-gray-800"^>{teacher.subject}^</span^>^</p^>
echo                 ^<p className="text-gray-600"^>Classes: ^<span className="font-medium text-gray-800"^>{teacher.classes.join(', ')}^</span^>^</p^>
echo                 ^<p className="text-gray-600"^>Digital Identity (DID): ^<span className="font-medium text-gray-800 break-all"^>{teacher.did}^</span^>^</p^>
echo                  {/* Simulated button to connect wallet */}
echo                  ^<button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200 ease-in-out flex items-center justify-center"^>
echo                      ^<WalletIcon className="mr-2"/\>^ Connect Wallet (Simulated)
echo                  ^</button^>
echo             ^</div^>
echo.
echo             {/* Performance Rewards Card (Tokens) */}
echo             ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Performance Rewards (Tokens)^</h3^>
echo                 {/* Display current token balance */}
echo                 ^<p className="text-gray-600 text-xl font-bold"^>Current Balance: ^<span className="text-green-600"^>{teacher.tokenBalance} Tokens^</span^>^</p^>
echo                  {/* Simulated withdraw button */}
echo                  ^<button className="mt-4 bg-yellow-500 text-gray-800 py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200 ease-in-out flex items-center justify-center"^>
echo                      ^<DollarSignIcon className="mr-2"/\>^ Withdraw Tokens (Simulated)
echo                  ^</button^>
echo             ^</div^>
echo.
echo             {/* Performance Metrics Card (Simulated) */}
echo             ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2"^> {/* This card spans columns */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Performance Metrics (Simulated)^</h3^>
echo                  {/* Display simulated performance metrics */}
echo                  ^<p className="text-gray-600"^>Avg. Student Improvement: ^<span className="font-medium text-gray-800"^>{teacher.performanceMetrics.avgStudentImprovement}^</span^>^</p^>
echo                  ^<p className="text-gray-600"^>Class Attendance Rate: ^<span className="font-medium text-gray-800"^>{teacher.performanceMetrics.classAttendance}^</span^>^</p^>
echo                  ^<p className="text-gray-600"^>Curriculum Completion: ^<span className="font-medium text-gray-800"^>{teacher.performanceMetrics.curriculumCompletion}^</span^>^</p^>
echo             ^</div^>
echo.
echo              {/* Token Earning History Card */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2"^> {/* This card spans columns */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Token Earning History^</h3^>
echo                  {/* List of token earning events */}
echo                  ^<ul className="divide-y divide-gray-200"^>
echo                     {teacher.tokenHistory.map((item, index) =^> (
echo                         ^<li key={index} className="py-3 flex justify-between items-center text-gray-600 text-sm"^>
echo                             ^<span^>{item.date}: {item.description}^</span^>
echo                             ^<span className="font-medium text-green-600"^>+ {item.amount} Tokens^</span^>
echo                         ^</li^>
echo                     ))}
echo                 ^</ul^>
echo             ^</div^>
echo.
echo              {/* Managed Students Card (Simulated) */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2"^> {/* This card spans columns */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Managed Students (Simulated)^</h3^>
echo                 {/* List of students managed by this teacher */}
echo                 ^<ul className="divide-y divide-gray-200"^>
echo                     {teacher.managedStudents.map(student =^> (
echo                         ^<li key={student.id} className="py-3 flex justify-between items-center text-gray-600 text-sm"^>
echo                             ^<span^>{student.name} ({student.grade})^</span^>
echo                              ^<span className="font-medium text-blue-600"^>{student.performance}^</span^>
echo                         ^</li^>
echo                     ))}
echo                 ^</ul^>
echo                  {/* Simulated button to view all students */}
echo                  ^<button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out w-full"^>View All Students (Simulated)^</button^>
echo             ^</div^>
echo         ^</div^>
echo     ^</div^>
echo );
echo.
echo export default TeacherDashboard;
) > src\pages\TeacherDashboard.jsx

REM src\pages\StudentDashboard.jsx
echo Creating src\pages\StudentDashboard.jsx...
(
echo // src\pages\StudentDashboard.jsx
echo import React from 'react';
echo.
echo // Using inline SVGs for icons (ensure these are defined or imported if used elsewhere)
echo // These icons are simple visual aids for the buttons.
echo const WalletIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4v-3"/\>^<path d="M17 20v-2a2 2 0 0 0-2-2H5"/\>^</svg>^>);
echo const DollarSignIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<line x1="12" y1="1" x2="12" y2="23"/\>^<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/\>^</svg>^>);
echo.
echo.
echo // This component renders the dashboard view for a Student.
echo // It displays student-specific information, academic timeline, certificates, and token balance.
echo.
echo const StudentDashboard = ({ student }) =^> (
echo     // Main container with padding, background color, rounded corners, and shadow
echo     ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo         {/* Page Title */}
echo         ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Student Dashboard: {student.name}^</h2^>
echo.
echo         {/* Grid layout for dashboard cards */}
echo         ^<div className="grid grid-cols-1 md:grid-cols-2 gap-6"^>
echo             {/* Basic Information Card */}
echo             ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Basic Information^</h3^>
echo                 ^<p className="text-gray-600"^>Current Grade: ^<span className="font-medium text-gray-800"^>{student.grade}^</span^>^</p^>
echo                 ^<p className="text-gray-600"^>Digital Identity (DID): ^<span className="font-medium text-gray-800 break-all"^>{student.did}^</span^>^</p^>
echo                  {/* Simulated button to connect wallet */}
echo                  ^<button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200 ease-in-out flex items-center justify-center"^>
echo                      ^<WalletIcon className="mr-2"/\>^ Connect Wallet (Simulated)
echo                  ^</button^>
echo             ^</div^>
echo.
echo             {/* Academic Capital Card (Tokens) */}
echo             ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Academic Capital (Tokens)^</h3^>
echo                 {/* Display current token balance */}
echo                 ^<p className="text-gray-600 text-xl font-bold"^>Current Balance: ^<span className="text-green-600"^>{student.tokenBalance} Tokens^</span^>^</p^>
echo                  {/* Simulated withdraw button */}
echo                  ^<button className="mt-4 bg-yellow-500 text-gray-800 py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200 ease-in-out flex items-center justify-center"^>
echo                      ^<DollarSignIcon className="mr-2"/\>^ Withdraw Tokens (Simulated)
echo                  ^</button^>
echo             ^</div^>
echo.
echo             {/* Academic Timeline Card */}
echo             ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2"^> {/* This card spans columns */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Academic Timeline^</h3^>
echo                 {/* List of academic timeline events */}
echo                 ^<ul className="list-disc list-inside text-gray-600"^>
echo                     {student.academicTimeline.map((item, index) =^> (
echo                         ^<li key={index} className="mb-1"^>{item.year}: {item.event}^</li^>
echo                     ))}
echo                 ^</ul^>
echo             ^</div^>
echo.
echo              {/* Digital Certificates ^& Awards Card (NFTs) */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2"^> {/* This card spans columns */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Digital Certificates ^& Awards (NFTs)^</h3^>
echo                  {/* Grid layout for displaying certificate cards */}
echo                 ^<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"^>
echo                     {student.certificates.map(cert =^> (
echo                         // Each certificate card
echo                         ^<div key={cert.id} className="border border-gray-200 rounded-lg p-3 text-center shadow-sm"^>
echo                             {/* Placeholder image for the NFT */}
echo                             ^<img src={cert.imageUrl} alt={cert.title} className="mx-auto mb-2 rounded-md"/\>^
echo                             {/* Certificate title and year */}
echo                             ^<p className="text-sm font-medium text-gray-700"^>{cert.title}^</p^>
echo                             ^<p className="text-xs text-gray-500"^>{cert.year}^</p^>
echo                              {/* Simulated button to view NFT details */}
echo                              ^<button className="mt-2 text-blue-600 hover:underline text-sm"^>View Details (Simulated)^</button^>
echo                         ^</div^>
echo                     ))}
echo                 ^</div^>
echo             ^</div^>
echo.
echo              {/* Token Earning History Card */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2"^> {/* This card spans columns */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Token Earning History^</h3^>
echo                  {/* List of token earning events */}
echo                  ^<ul className="divide-y divide-gray-200"^>
echo                     {student.tokenHistory.map((item, index) =^> (
echo                         ^<li key={index} className="py-3 flex justify-between items-center text-gray-600 text-sm"^>
echo                             ^<span^>{item.date}: {item.description}^</span^>
echo                             ^<span className="font-medium text-green-600"^>+ {item.amount} Tokens^</span^>
echo                         ^</li^>
echo                     ))}
echo                 ^</ul^>
echo             ^</div^>
echo.
echo              {/* Fee Payment History Card (Simulated) */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2"^> {/* This card spans columns */}
echo                 ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Fee Payment History (Simulated)^</h3^>
echo                  {/* List of fee payment records */}
echo                  ^<ul className="divide-y divide-gray-200"^>
echo                     {student.feesPaid.map((item, index) =^> (
echo                         ^<li key={index} className="py-3 flex justify-between items-center text-gray-600 text-sm"^>
echo                             ^<span^>{item.term}^</span^>
echo                              ^<span^>{item.amount} NGN^</span^>
echo                              ^<span className={`font-medium ${item.status =^== 'Paid' ? 'text-green-600' : 'text-red-600'}`}^>{item.status}^</span^>
echo                              ^<span className="text-xs text-gray-500"^>{item.date}^</span^>
echo                         ^</li^>
echo                     ))}
echo                 ^</ul^>
echo             ^</div^>
echo         ^</div^>
echo     ^</div^>
echo );
echo.
echo export default StudentDashboard;
) > src\pages\StudentDashboard.jsx

REM src\components\Sidebar.jsx
echo Creating src\components\Sidebar.jsx...
(
echo // src\components\Sidebar.jsx
echo import React from 'react';
echo.
echo // Using inline SVGs for icons. These are simple graphical representations.
echo const HomeIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/\>^<polyline points="9 22 9 12 15 12 15 22"/\>^</svg>^>);
echo const UserIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/\>^<circle cx="12" cy="7" r="4"/\>^</svg>^>);
echo const UsersIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/\>^<circle cx="9" cy="7" r="4"/\>^<path d="M22 21v-2a4 4 0 0 0-3-3.87"/\>^<path d="M16 3.13a4 4 0 0 1 0 7.75"/\>^</svg>^>);
echo const BookIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/\>^</svg>^>);
echo const AwardIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<circle cx="12" cy="8" r="7"/\>^<path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"/\>^</svg>^>);
echo const DollarSignIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<line x1="12" y1="1" x2="12" y2="23"/\>^<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/\>^</svg>^>);
echo const WalletIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4v-3"/\>^<path d="M17 20v-2a2 2 0 0 0-2-2H5"/\>^</svg>^>);
echo const SettingsIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.31a2 2 0 0 0 0 2.12l.78 1.31a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 0 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.31a2 2 0 0 0 0-2.12l-.78-1.31a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 0-1-1.73V4a2 2 0 0 0-2-2z"/\>^<circle cx="12" cy="12" r="3"/\>^</svg>^>);
echo const CreditCardIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<rect width="20" height="14" x="2" y="5" rx="2"/\>^<line x1="2" y1="10" x2="22" y2="10"/\>^</svg>^>);
echo.
echo.
echo const Sidebar = ({ setActiveView, userRole, onLogout }) =^> {
echo     // Define menu items and which roles can see them
echo     // This controls what links appear in the sidebar based on who is logged in
echo     const menuItems = [
echo         { id: 'dashboard', label: 'Dashboard', icon: ^<HomeIcon /\>^, roles: ['admin', 'teacher', 'student'] },
echo         { id: 'academic', label: 'Academic Records', icon: ^<BookIcon /\>^, roles: ['admin', 'teacher', 'student'] }, // Teachers might need to view/manage student records
echo         { id: 'certificates', label: 'Certificates ^& Awards', icon: ^<AwardIcon /\>^, roles: ['admin', 'student'] },
echo         { id: 'tokens', label: 'Academic Capital (Tokens)', icon: ^<DollarSignIcon /\>^, roles: ['student', 'teacher'] },
echo         { id: 'blockchain', label: 'Blockchain Info', icon: ^<WalletIcon /\>^, roles: ['admin', 'student', 'teacher'] },
echo         { id: 'users', label: 'User Management', icon: ^<UsersIcon /\>^, roles: ['admin'] },
echo          { id: 'finance', label: 'Financials', icon: ^<CreditCardIcon /\>^, roles: ['admin'] }, // Parent role would also see finance in a full app
echo         { id: 'settings', label: 'Settings', icon: ^<SettingsIcon /\>^, roles: ['admin', 'teacher', 'student'] },
echo     ];
echo.
echo     return (
echo         // The sidebar layout - fixed width, dark background, rounded corners
echo         ^<div className="w-64 bg-gray-800 text-white h-screen p-4 rounded-l-lg shadow-lg flex flex-col"^>
echo             {/* App Title */}
echo             ^<h2 className="text-2xl font-bold mb-6 text-center text-yellow-400"^>SMSUP+^</h2^>
echo.
echo             {/* Navigation Links */}
echo             ^<nav className="flex-grow"^> {/* flex-grow makes this section take up available space */}
echo                 ^<ul^>
echo                     {menuItems
echo                         // Filter menu items to only show ones relevant to the current user's role
echo                         .filter(item =^> item.roles.includes(userRole))
echo                         .map(item =^> (
echo                             // Each menu item is a list item
echo                             ^<li key={item.id} className="mb-3"^>
echo                                 {/* Button to change the active view */}
echo                                 ^<button
echo                                     onClick={() =^> setActiveView(item.id)}
echo                                     className="flex items-center w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 rounded-md transition duration-200 ease-in-out"
echo                                 ^>
echo                                     {/* Icon and label for the menu item */}
echo                                     {item.icon}
echo                                     ^<span className="ml-3"^>{item.label}^</span^>
echo                                 ^</button^>
echo                             ^</li^>
echo                         ))}
echo                 ^</ul^>
echo             ^</nav^>
echo.
echo              {/* Logout button at the bottom */}
echo              ^<div className="mt-auto"^> {/* mt-auto pushes this div to the bottom */}
echo                  ^<button
echo                      onClick={onLogout}
echo                      className="flex items-center w-full text-left text-red-400 hover:bg-gray-700 hover:text-red-500 py-2 px-3 rounded-md transition duration-200 ease-in-out"
echo                  ^>
echo                      {/* Logout Icon */}
echo                      ^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/\>^<polyline points="16 17 21 12 16 7"/\>^<line x1="21" y1="12" x2="9" y2="12"/\>^</svg>^>
echo                      ^<span className="ml-3"^>Logout^</span^>
echo                  ^</button^>
echo              ^</div^>
echo         ^</div^>
echo     );
echo };
echo.
echo export default Sidebar;
) > src\components\Sidebar.jsx

REM src\components\AcademicRecordsView.jsx
echo Creating src\components\AcademicRecordsView.jsx...
(
echo // src\components\AcademicRecordsView.jsx
echo import React from 'react';
echo.
echo // This component is a placeholder for displaying academic records.
echo // In a real app, this would show detailed grades, attendance, etc.
echo.
echo const AcademicRecordsView = ({ userRole, academicData }) =^> {
echo     return (
echo         // Main container with padding, background color, rounded corners, and shadow
echo         ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo             {/* Page Title */}
echo             ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Academic Records ({userRole === 'student' ? 'My' : 'Manage'})^</h2^>
echo.
echo             {/* Content Area */}
echo             ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                 {/* Explanation text */}
echo                 ^<p className="text-gray-700"^>This section would display detailed academic records (grades per subject, attendance, etc.).^</p^>
echo.
echo                 {/* Role-specific messages */}
echo                 {userRole === 'admin' && ^<p className="text-gray-600 mt-2"^>Admins can view and manage student records here. (Simulated)^</p^>}
echo                 {userRole === 'teacher' && ^<p className="text-gray-600 mt-2"^>Teachers can view and manage records for their students here. (Simulated)^</p^>}
echo                 {userRole === 'student' && (
echo                     ^<>{/* Use a fragment to group elements */}
echo                         ^<p className="text-gray-600 mt-2"^>Students can view their detailed academic history here, secured by their DID.^</p^>
echo                         {/* Display simulated academic timeline if available */}
echo                         {academicData && academicData.length > 0 && (
echo                              ^<div className="mt-4"^>
echo                                  ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Academic Timeline (Simulated)^</h3^>
echo                                  ^<ul className="list-disc list-inside text-gray-600"^>
echo                                      {academicData.map((item, index) =^> (
echo                                          ^<li key={index} className="mb-1"^>{item.year}: {item.event}^</li^>
echo                                      ))}
echo                                  ^</ul^>
echo                              ^</div^>
echo                         )}
echo                     ^</>
echo                 )}
echo             ^</div^>
echo         ^</div^>
echo     );
echo };
echo.
echo export default AcademicRecordsView;
) > src\components\AcademicRecordsView.jsx

REM src\components\BlockchainInfoView.jsx
echo Creating src\components\BlockchainInfoView.jsx...
(
echo // src\components\BlockchainInfoView.jsx
echo import React from 'react';
echo.
echo // Using inline SVGs for icons (ensure these are defined or imported if used elsewhere)
echo // These icons are simple visual aids.
echo const WalletIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4v-3"/\>^<path d="M17 20v-2a2 2 0 0 0-2-2H5"/\>^</svg>^>);
echo.
echo.
echo // This component displays simulated information about the blockchain integration.
echo // In a real app, this would show live data from the Cardano blockchain.
echo.
echo const BlockchainInfoView = ({ studentDid, teacherDid, adminData }) =^> {
echo      return (
echo          // Main container with padding, background color, rounded corners, and shadow
echo          ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo              {/* Page Title */}
echo              ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Blockchain Information (Simulated)^</h2^>
echo.
echo              {/* Grid layout for information cards */}
echo              ^<div className="grid grid-cols-1 md:grid-cols-2 gap-6"^>
echo                  {/* Decentralized Identities Card */}
echo                  ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                      ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Decentralized Identities (DIDs)^</h3^>
echo                      {/* Display sample DIDs */}
echo                      ^<p className="text-gray-600"^>Sample Student DID: ^<span className="font-medium text-gray-800 break-all"^>{studentDid}^</span^>^</p^>
echo                      ^<p className="text-gray-600"^>Sample Teacher DID: ^<span className="font-medium text-gray-800 break-all"^>{teacherDid}^</span^>^</p^>
echo                      ^<p className="text-sm text-gray-500 mt-2"^>These DIDs are anchors for verifiable credentials and assets on the blockchain, ensuring self-sovereign identity.^</p^>
echo                  ^</div^>
echo.
echo                  {/* On-Chain Assets Card (Simulated) */}
echo                  ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                      ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>On-Chain Assets (Simulated)^</h3^>
echo                      {/* Display simulated asset counts */}
echo                      ^<p className="text-gray-600"^>Total Issued NFTs (Certificates/Awards): ^<span className="font-medium text-gray-800"^>{adminData.issuedNFTs}^</span^>^</p^>
echo                      ^<p className="text-gray-600"^>Total Issued Tokens (Academic Capital): ^<span className="font-medium text-gray-800"^>{adminData.totalTokensEarned}^</span^>^</p^>
echo                      ^<p className="text-sm text-gray-500 mt-2"^>Represents the total verifiable assets minted and managed by the school on Cardano.^</p^>
echo                  ^</div^>
echo.
echo                  {/* Simulated Explorer/Smart Contracts Card */}
echo                  ^<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2"^> {/* This card spans across columns */}
echo                      ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Simulated Blockchain Explorer ^& Smart Contracts^</h3^>
echo                      ^<p className="text-gray-600"^>Imagine this section provides links or visualizations to a blockchain explorer where you can verify the existence and history of DIDs, VCs, NFTs, and token transactions. It also represents the smart contracts (Marlowe/Plutus) automating processes like token distribution.^</p^>
echo                      {/* Placeholder for a link */}
echo                      ^<a href="#" className="text-blue-500 hover:underline mt-2 inline-block"^>View On-Chain Data (Simulated Link)^</a^>
echo                  ^</div^>
echo              ^</div^>
echo          ^</div^>
echo      );
echo };
echo.
echo export default BlockchainInfoView;
) > src\components\BlockchainInfoView.jsx

REM src\components\CertificatesView.jsx
echo Creating src\components\CertificatesView.jsx...
(
echo // src\components\CertificatesView.jsx
echo import React from 'react';
echo.
echo // This component displays digital certificates and awards (simulated NFTs).
echo.
echo const CertificatesView = ({ userRole, certificates }) =^> {
echo      return (
echo          // Main container with padding, background color, rounded corners, and shadow
echo          ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo              {/* Page Title */}
echo              ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Certificates ^& Awards ({userRole === 'student' ? 'My' : 'Issued'})^</h2^>
echo.
echo              {/* Content Area */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                  {userRole === 'student' && (
echo                      ^<>{/* Use a fragment to group elements */}
echo                          ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>My Digital Assets (NFTs)^</h3^>
echo                          {/* Check if there are certificates to display */}
echo                          {certificates ^&& certificates.length > 0 ? (
echo                               // Grid layout for displaying certificate cards
echo                               ^<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"^>
echo                                   {certificates.map(cert =^> (
echo                                       // Each certificate card
echo                                       ^<div key={cert.id} className="border border-gray-200 rounded-lg p-3 text-center shadow-sm"^>
echo                                           {/* Placeholder image for the NFT */}
echo                                           ^<img src={cert.imageUrl} alt={cert.title} className="mx-auto mb-2 rounded-md"/\>^
echo                                           {/* Certificate title and year */}
echo                                           ^<p className="text-sm font-medium text-gray-700"^>{cert.title}^</p^>
echo                                           ^<p className="text-xs text-gray-500"^>{cert.year}^</p^>
echo                                            {/* Simulated button to view NFT details */}
echo                                            ^<button className="mt-2 text-blue-600 hover:underline text-sm"^>View Details (Simulated)^</button^>
echo                                       ^</div^>
echo                                   ))}
echo                               ^</div^>
echo                          ) : (
echo                              {/* Message if no certificates are found */}
echo                              ^<p className="text-gray-600"^>No certificates or awards issued yet.^</p^>
echo                          )}
echo                      ^</>
echo                  )}
echo                  {userRole === 'admin' && (
echo                      {/* Message for admin view */}
echo                      ^<p className="text-gray-700"^>Admins can issue, view, and manage digital certificates and awards (NFTs) here. (Simulated)^</p^>
echo                  )}
echo              ^</div^>
echo          ^</div^>
echo      );
echo };
echo.
echo export default CertificatesView;
) > src\components\CertificatesView.jsx

REM src\components\FinancialsView.jsx
echo Creating src\components\FinancialsView.jsx...
(
echo // src\components\FinancialsView.jsx
echo import React from 'react';
echo.
echo // This component simulates the financial view for administrators.
echo // In a real app, this would show detailed financial data from blockchain records.
echo.
echo const FinancialsView = ({ adminData, studentData }) =^> {
echo      return (
echo          // Main container with padding, background color, rounded corners, and shadow
echo          ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo              {/* Page Title */}
echo              ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Financial Management (Admin)^</h2^>
echo.
echo              {/* Content Area */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                  {/* Explanation text */}
echo                  ^<p className="text-gray-700"^>This section provides a transparent overview of school finances, powered by blockchain-recorded fee payments.^</p^>
echo.
echo                  {/* List of simulated financial features */}
echo                  ^<ul className="list-disc list-inside text-gray-600 mt-4"^>
echo                      ^<li^>View all fee payments with blockchain transaction IDs (Simulated)^</li^>
echo                      ^<li^>Track income and expenses (Simulated)^</li^>
echo                      ^<li^>Generate financial reports (Simulated)^</li^>
echo                      ^<li^>Manage school budget (Simulated)^</li^>
echo                  ^</ul^>
echo.
echo                  {/* Display a snippet of simulated fee history for demonstration */}
echo                  {studentData ^&& studentData.feesPaid ^&& studentData.feesPaid.length > 0 ^&& (
echo                      ^<div className="mt-6"^>
echo                          ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Sample Fee Payment History (Simulated)^</h3^>
echo                          ^<ul className="divide-y divide-gray-200"^>
echo                              {studentData.feesPaid.map((item, index) =^> (
echo                                  ^<li key={index} className="py-3 flex justify-between items-center text-gray-600 text-sm"^>
echo                                      ^<span^>{item.term}^</span^>
echo                                      ^<span^>{item.amount} NGN^</span^>
echo                                      {/* Display status with different colors */}
echo                                      ^<span className={`font-medium ${item.status =^== 'Paid' ? 'text-green-600' : 'text-red-600'}`}^>{item.status}^</span^>
echo                                      ^<span className="text-xs text-gray-500"^>{item.date}^</span^>
echo                                  ^</li^>
echo                              ))}
echo                          ^</ul^>
echo                          ^<p className="text-sm text-gray-500 mt-2"^>This data is simulated and would be pulled from blockchain records in a real application.^</p^>
echo                      ^</div^>
echo                  )}
echo                  ^<p className="text-sm text-gray-500 mt-4"^>Ensures accountability and trust in financial operations.^</p^>
echo              ^</div^>
echo          ^</div^>
echo      );
echo };
echo.
echo export default FinancialsView;
) > src\components\FinancialsView.jsx

REM src\components\SettingsView.jsx
echo Creating src\components\SettingsView.jsx...
(
echo // src\components\SettingsView.jsx
echo import React from 'react';
echo.
echo // This component is a placeholder for the settings view.
echo // Different settings would be available based on the user role.
echo.
echo const SettingsView = ({ userRole }) =^> {
echo      return (
echo          // Main container with padding, background color, rounded corners, and shadow
echo          ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo              {/* Page Title */}
echo              ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Settings^</h2^>
echo.
echo              {/* Content Area */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                  {/* Explanation text */}
echo                  ^<p className="text-gray-700"^>System settings and configuration options would be available here.^</p^>
echo.
echo                  {/* List of simulated settings */}
echo                  ^<ul className="list-disc list-inside text-gray-600 mt-4"^>
echo                      ^<li^>Manage school profile (Simulated)^</li^>
echo                      ^<li^>Configure academic years and terms (Simulated)^</li^>
echo                      ^<li^>Set up token reward rules (Simulated)^</li^>
echo                      ^<li^>Manage API integrations (Simulated)^</li^>
echo                  ^</ul^>
echo.
echo                   {/* Role-specific messages */}
echo                   {userRole === 'admin' ^&& ^<p className="text-gray-600 mt-2"^>Admins have full access to settings.^</p^>}
echo                   {userRole === 'teacher' ^&& ^<p className="text-gray-600 mt-2"^>Teachers might have limited access to profile or class settings.^</p^>}
echo                   {userRole === 'student' ^&& ^<p className="text-gray-600 mt-2"^>Students might have access to profile or notification settings.^</p^>}
echo              ^</div^>
echo          ^</div^>
echo      );
echo };
echo.
echo export default SettingsView;
) > src\components\SettingsView.jsx

REM src\components\TokensView.jsx
echo Creating src\components\TokensView.jsx...
(
echo // src\components\TokensView.jsx
echo import React from 'react';
echo.
echo // Using inline SVGs for icons (ensure these are defined or imported if used elsewhere)
echo // These icons are simple visual aids for the buttons.
echo const DollarSignIcon = () =^> (^<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"^>^<line x1="12" y1="1" x2="12" y2="23"/\>^<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/\>^</svg>^>);
echo.
echo.
echo // This component displays the user's token balance and earning history.
echo.
echo const TokensView = ({ userRole, tokenData }) =^> {
echo      return (
echo          // Main container with padding, background color, rounded corners, and shadow
echo          ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo              {/* Page Title */}
echo              ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>Academic Capital (Tokens)^</h2^>
echo.
echo              {/* Current Balance Card */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md mb-6"^>
echo                  ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Current Balance^</h3^>
echo                  {/* Display the token balance */}
echo                  ^<p className="text-gray-600 text-2xl font-bold text-green-600"^>{tokenData.balance} Tokens^</p^>
echo                  {/* Simulated withdraw button */}
echo                  ^<button className="mt-4 bg-yellow-500 text-gray-800 py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200 ease-in-out flex items-center justify-center"^>
echo                      ^<DollarSignIcon className="mr-2"/\>^ Withdraw Tokens (Simulated)
echo                  ^</button^>
echo                  {/* Role-specific explanation for tokens */}
echo                  {userRole === 'student' ^&& ^<p className="text-sm text-gray-500 mt-2"^>Tokens earned through academic performance and participation.^</p^>}
echo                  {userRole === 'teacher' ^&& ^<p className="text-sm text-gray-500 mt-2"^>Tokens earned through performance-based rewards.^</p^>}
echo              ^</div^>
echo.
echo              {/* Earning History Card */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                  ^<h3 className="text-lg font-semibold text-gray-700 mb-3"^>Earning History^</h3^>
echo                  {/* List of token earning events */}
echo                  ^<ul className="divide-y divide-gray-200"^>
echo                      {tokenData.history.map((item, index) =^> (
echo                          ^<li key={index} className="py-3 flex justify-between items-center text-gray-600 text-sm"^>
echo                              ^<span^>{item.date}: {item.description}^</span^>
echo                              ^<span className="font-medium text-green-600"^>+ {item.amount} Tokens^</span^>
echo                          ^</li^>
echo                      ))}
echo                  ^</ul^>
echo              ^</div^>
echo          ^</div^>
echo      );
echo };
echo.
echo export default TokensView;
) > src\components\TokensView.jsx

REM src\components\UserManagementView.jsx
echo Creating src\components\UserManagementView.jsx...
(
echo // src\components\UserManagementView.jsx
echo import React from 'react';
echo.
echo // This component simulates the user management view for administrators.
echo // In a real app, admins could add, edit, and manage user accounts.
echo.
echo const UserManagementView = () =^> {
echo      return (
echo          // Main container with padding, background color, rounded corners, and shadow
echo          ^<div className="p-6 bg-gray-100 min-h-screen rounded-r-lg shadow-inner"^>
echo              {/* Page Title */}
echo              ^<h2 className="text-3xl font-bold mb-6 text-gray-800"^>User Management (Admin)^</h2^>
echo.
echo              {/* Content Area */}
echo              ^<div className="bg-white p-6 rounded-lg shadow-md"^>
echo                  {/* Explanation text */}
echo                  ^<p className="text-gray-700"^>Admins can manage student, teacher, and parent accounts here.^</p^>
echo.
echo                  {/* List of simulated management actions */}
echo                  ^<ul className="list-disc list-inside text-gray-600 mt-4"^>
echo                      ^<li^>Add new users and issue DIDs (Simulated)^</li^>
echo                      ^<li^>View and edit user profiles (Simulated)^</li^>
echo                      ^<li^>Assign roles and permissions (Simulated)^</li^>
echo                      ^<li^>Reset passwords (Simulated)^</li^>
echo                  ^</ul^>
echo              ^</div^>
echo          ^</div^>
echo      );
echo };
echo.
echo export default UserManagementView;
) > src\components\UserManagementView.jsx

REM src\App.jsx
echo Creating src\App.jsx...
(
echo import React, { useState, useEffect } from 'react';
echo.
echo // Import the LoginScreen component from the pages folder
echo import LoginScreen from './pages/LoginScreen';
echo.
echo // Import the dashboard components for each role from the pages folder
echo import AdminDashboard from './pages/AdminDashboard';
echo import TeacherDashboard from './pages/TeacherDashboard';
echo import StudentDashboard from './pages/StudentDashboard';
echo.
echo // Import the Sidebar component from the components folder
echo import Sidebar from './components/Sidebar';
echo.
echo // Import the other view components from the components folder
echo import AcademicRecordsView from './components/AcademicRecordsView';
echo import CertificatesView from './components/CertificatesView';
echo import TokensView from './components/TokensView';
echo import BlockchainInfoView from './components/BlockchainInfoView';
echo import UserManagementView from './components/UserManagementView';
echo import FinancialsView from './components/FinancialsView';
echo import SettingsView from './components/SettingsView';
echo.
echo // Import the simulated data
echo import { simulatedData } from './data/simulatedData'; // We'll create this file next
echo.
echo // The main App component that manages the user's login state and the currently displayed view.
echo const App = () =^> {
echo     // State to track the current user's role (null if not logged in)
echo     const [userRole, setUserRole] = useState(null); // 'admin', 'teacher', 'student', or null
echo     // State to track which view is currently active in the content area
echo     const [activeView, setActiveView] = useState('dashboard'); // Default view after login
echo.
echo     // Function to handle successful login
echo     const handleLogin = (role) =^> {
echo         setUserRole(role); // Set the user's role
echo         setActiveView('dashboard'); // Go to the dashboard view after logging in
echo     };
echo.
echo     // Function to handle logout
echo     const handleLogout = () =^> {
echo         setUserRole(null); // Clear the user's role
echo         setActiveView('dashboard'); // Reset the view to dashboard (which will show login screen)
echo     };
echo.
echo     // Effect to reset the view to dashboard whenever the userRole changes (e.g., after login/logout)
echo     useEffect(() =^> {
echo         if (userRole) {
echo              setActiveView('dashboard');
echo         }
echo     }, [userRole]); // This effect runs whenever userRole changes
echo.
echo     // Function to determine which content component to render based on the activeView and userRole
echo     const renderContent = () =^> {
echo         // If no user is logged in, show the LoginScreen
echo         if (!userRole) {
echo             return ^<LoginScreen onLogin={handleLogin} /\>^;
echo         }
echo.
echo         // If a user is logged in, render the appropriate view based on activeView
echo         switch (activeView) {
echo             case 'dashboard':
echo                 if (userRole === 'admin') return ^<AdminDashboard data={simulatedData.admin} /\>^;
echo                 if (userRole === 'teacher') return ^<TeacherDashboard teacher={simulatedData.teacher} /\>^;
echo                 if (userRole === 'student') return ^<StudentDashboard student={simulatedData.student} /\>^;
echo                 return ^<div^>Select a role to view dashboard.^</div^>; // Should not be reached if userRole is set
echo             case 'academic':
echo                  // Pass relevant data to AcademicRecordsView based on user role
echo                  const academicData = userRole === 'student' ? simulatedData.student.academicTimeline : null; // Admins/Teachers would access different/more data
echo                  return ^<AcademicRecordsView userRole={userRole} academicData={academicData} /\>^;
echo             case 'certificates':
echo                  // Pass relevant data to CertificatesView based on user role
echo                  const certData = userRole === 'student' ? simulatedData.student.certificates : null; // Admins would see all certificates
echo                  return ^<CertificatesView userRole={userRole} certificates={certData} /\>^;
echo             case 'tokens':
echo                  // Pass relevant data to TokensView based on user role
echo                  const tokenData = userRole === 'student'
echo                     ? { balance: simulatedData.student.tokenBalance, history: simulatedData.student.tokenHistory }
echo                     : { balance: simulatedData.teacher.tokenBalance, history: simulatedData.teacher.tokenHistory };
echo                  return ^<TokensView userRole={userRole} tokenData={tokenData} /\>^;
echo             case 'blockchain':
echo                  // Pass relevant simulated blockchain data
echo                  return ^<BlockchainInfoView studentDid={simulatedData.student.did} teacherDid={simulatedData.teacher.did} adminData={simulatedData.admin} /\>^;
echo             case 'users':
echo                  // Only show UserManagementView for admin
echo                  if (userRole === 'admin') return ^<UserManagementView /\>^;
echo                  return ^<div^>Access Denied.^</div^>; // Fallback if non-admin tries to access
echo             case 'finance':
echo                  // Only show FinancialsView for admin (and potentially parent in full app)
echo                  if (userRole === 'admin') return ^<FinancialsView adminData={simulatedData.admin} studentData={simulatedData.student} /\>^; // Pass relevant data
echo                  return ^<div^>Access Denied.^</div^>; // Fallback if non-admin tries to access
echo             case 'settings':
echo                 return ^<SettingsView userRole={userRole} /\>^;
echo             default:
echo                 return ^<div^>View not found.^</div^>; // Fallback for unknown views
echo         }
echo     };
echo.
echo     return (
echo         // Main application layout - uses flexbox to arrange sidebar and content
echo         ^<div className="flex h-screen bg-gray-200 font-sans"^>
echo             {/* The Sidebar component - only renders if a user is logged in */}
echo             {userRole ^&& ^<Sidebar setActiveView={setActiveView} userRole={userRole} onLogout={handleLogout} /\>^}
echo.
echo             {/* The main content area - takes up the remaining space and allows vertical scrolling */}
echo             ^<div className="flex-1 overflow-y-auto"^>
echo                 {renderContent()} {/* Render the currently active view */}
echo             ^</div^>
echo         ^</div^>
echo     );
echo };
echo.
echo export default App; // Export the App component so it can be used in main.jsx
) > src\App.jsx

REM src\main.jsx
echo Creating src\main.jsx...
(
echo import React from 'react';
echo import ReactDOM from 'react-dom/client';
echo import App from './App.jsx'; // Import the main App component
echo import './index.css'; // Import the main CSS file (which includes Tailwind)
echo.
echo // This is the entry point of your React application.
echo // It tells React to render the App component into the HTML element with the id 'root'.
echo ReactDOM.createRoot(document.getElementById('root')).render(
echo   // React.StrictMode helps find potential problems in your code during development
echo   ^<React.StrictMode^>
echo     ^<App /\>^ {/* Render the main App component */}
echo   ^</React.StrictMode^>,
echo );
) > src\main.jsx

REM src\index.css - Overwrite the existing index.css with Tailwind directives
echo Overwriting src\index.css with Tailwind directives...
(
echo @tailwind base;
echo @tailwind components;
echo @tailwind utilities;
echo.
echo /* Optional: Add Inter font for a clean look */
echo @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700^&display=swap');
echo.
echo body {
echo   font-family: 'Inter', sans-serif;
echo   margin: 0; /* Remove default body margin */
echo   padding: 0; /* Remove default body padding */
echo   overflow-x: hidden; /* Prevent horizontal scrolling */
echo }
) > src\index.css

REM tailwind.config.js - Overwrite the existing tailwind.config.js
echo Overwriting tailwind.config.js...
(
echo /** @type {import('tailwindcss').Config} */
echo export default {
echo   content: [
echo     "./index.html",
echo     "./src/**/*.{js,ts,jsx,tsx}",
echo   ],
echo   theme: {
echo     extend: {},
echo   },
echo   plugins: [],
echo }
) > tailwind.config.js


echo Frontend setup complete!
echo Now run "npm run dev" in your terminal from the ugbekun-smsup folder to start the demo.
pause
