// --- APPLICATION STATE AND MOCK DATA ---
const AppState = {
    currentUser: null,
    currentPage: 'login',
    openSubmenus: {}, // Stores which sidebar submenus are open
    currentMessageView: 'inbox', // For messaging page: 'inbox', 'sent', 'compose', 'read'
    selectedMessageId: null, // For messaging page: ID of the currently viewed message
    theme: localStorage.getItem('ugbekunTheme') || 'light', // 'light' or 'dark'
    isMobileSidebarOpen: false, // Tracks mobile sidebar visibility
    mockData: { // Centralized mock data for the application
        students: [
            {
                id: 'std001', name: 'Aisha Bello', class: 'Grade 5A',
                did: 'did:prism:mock-aisha-bello-xxxx',
                eduCoins: 325, // Coins earned from various activities
                readingLogs: [
                    { bookId: 'lib001', dateCompleted: '2024-04-10', pagesRead: 150, coinsEarned: 15 },
                    { bookId: 'lib002', dateCompleted: '2024-05-01', pagesRead: 220, coinsEarned: 20 },
                ],
                participation: [
                    { activity: 'Science Fair Q1', type: 'Academic', points: 50, date: '2024-03-15', coinsEarned: 25 },
                    { activity: 'Debate Club Practice', type: 'Extracurricular', points: 10, date: '2024-04-20', coinsEarned: 5 },
                ],
                academicTimeline: [
                    { year: 2023, event: 'Enrolled & Digital ID Created', type: 'milestone', details: 'Student identity verified and DID issued.', txId: 'tx_mock_enroll_aisha_000', date: '2023-09-01' },
                    { year: 2023, event: 'Promoted to Grade 4', type: 'milestone', tokens: 50, details: 'Academic progression recorded on-chain.', txId: 'tx_mock_promo_aisha_001', date: '2023-07-15' },
                    { year: 2024, event: 'Top Performer - Term 1 (Math)', type: 'award', tokens: 75, details: 'Achievement tokenized for exceptional performance.', txId: 'tx_mock_award_aisha_002', date: '2024-03-20' },
                    { year: 2024, event: 'Science Fair Participant - Project "Volcanoes"', type: 'activity', details: 'Participation in extracurriculars noted.', tokens: 25, date: '2024-05-10' },
                    { year: 2024, event: 'Library Monitor Duty - Q2', type: 'responsibility', tokens: 20, details: 'Contribution to school community rewarded.', txId: 'tx_mock_duty_aisha_003', date: '2024-04-01' }
                ],
                nftCertificates: [
                    {
                        id: 'certNFT001', name: 'Grade 4 Completion Certificate',
                        issueDate: '2023-07-15', issuer: 'Premier Academy',
                        policyId: 'policy_mock_g4cert_pa_v1', assetName: 'Grade4CertAishaB',
                        embeddedTokens: 150,
                        txId: 'tx_mock_mint_cert001',
                        imageUrl: 'https://placehold.co/300x200/e0f2fe/0ea5e9?text=Grade+4+NFT+Cert&font=inter',
                        verificationLink: 'https://mock.cardanoscan.io/transaction/tx_mock_mint_cert001',
                        metadata: {
                            grade: "4",
                            academicYear: "2022-2023",
                            honors: "None",
                            verifiedSkills: ["Basic Arithmetic", "Reading Comprehension Level 3"],
                            attendanceRate: "97%"
                        }
                    },
                    {
                        id: 'certNFT004', name: 'Math Olympiad - Bronze Medal',
                        issueDate: '2024-03-20', issuer: 'National Education Board (Mock)',
                        policyId: 'policy_mock_mathcomp_neb_v1', assetName: 'MathOlymBronzeAisha',
                        embeddedTokens: 100,
                        txId: 'tx_mock_mint_mathcomp004',
                        imageUrl: 'https://placehold.co/300x200/fff7e6/fb923c?text=Math+Bronze+NFT&font=inter',
                        verificationLink: 'https://mock.cardanoscan.io/transaction/tx_mock_mint_mathcomp004',
                        metadata: {
                            competition: "National Junior Math Olympiad",
                            level: "Bronze",
                            issuingBodyDID: "did:prism:mock-neb-yyyy"
                        }
                    }
                ],
                cardanoWallet: { address: 'addr_mock_student_aisha_bello_xxxxxxxxxxxx', adaBalance: 2.5 },
                fees: {
                    totalDue: 50000, paid: 30000, balance: 20000,
                    paymentPlan: "Termly",
                    nextDueDate: "2024-09-01",
                    paymentHistory: [
                        { date: '2024-01-15', amount: 30000, method: 'Cardano (ADA via Marlowe Escrow)', txId: 'tx_fee_aisha_001', status: 'Confirmed & Released' }
                    ]
                }
            },
            {
                id: 'std002', name: 'Chinedu Okoro', class: 'Grade 6B',
                did: 'did:prism:mock-chinedu-okoro-yyyy',
                eduCoins: 550,
                readingLogs: [
                    { bookId: 'lib005', dateCompleted: '2024-04-25', pagesRead: 300, coinsEarned: 30 },
                ],
                participation: [
                    { activity: 'School Play Lead Role', type: 'Arts', points: 70, date: '2024-05-10', coinsEarned: 35 },
                ],
                academicTimeline: [
                    { year: 2024, event: 'Promoted to Grade 6', type: 'milestone', tokens: 100, details: 'Academic progression recorded.', txId: 'tx_mock_promo_chinedu_001', date: '2024-07-15' },
                    { year: 2024, event: 'Debate Club President', type: 'leadership', tokens: 50, details: 'Leadership role acknowledged.', txId: 'tx_mock_leader_chinedu_002', date: '2024-06-01' }
                ],
                nftCertificates: [
                    {
                        id: 'certNFT005', name: 'Debate Club President Certificate',
                        issueDate: '2024-06-01', issuer: 'Premier Academy - Student Council',
                        policyId: 'policy_mock_debateclub_pa_v1', assetName: 'DebatePresChinedu',
                        embeddedTokens: 50,
                        txId: 'tx_mock_mint_debate005',
                        imageUrl: 'https://placehold.co/300x200/d1fae5/059669?text=Debate+Pres+NFT&font=inter',
                        verificationLink: 'https://mock.cardanoscan.io/transaction/tx_mock_mint_debate005',
                        metadata: {
                            role: "President",
                            club: "Debate Club",
                            academicYear: "2023-2024",
                            achievements: ["Led team to regional semi-finals"]
                        }
                    }
                ],
                cardanoWallet: { address: 'addr_mock_student_chinedu_okoro_yyyyyyyyyyyy', adaBalance: 1.8 },
                fees: {
                    totalDue: 60000, paid: 60000, balance: 0,
                    paymentPlan: "Annually",
                    nextDueDate: "N/A (Paid in Full)",
                    paymentHistory: [
                        { date: '2024-01-10', amount: 60000, method: 'Cardano (ADA Direct)', txId: 'tx_fee_chinedu_001', status: 'Confirmed' }
                    ]
                }
            },
            {
                id: 'std003', name: 'Binta Garba', class: 'Grade 5B',
                did: 'did:prism:mock-binta-garba-zzzz',
                eduCoins: 210,
                readingLogs: [],
                participation: [
                    { activity: 'Volunteer: School Greening Project', type: 'Community', points: 40, date: '2024-04-22', coinsEarned: 20 },
                ],
                academicTimeline: [
                    { year: 2023, event: 'Joined Premier Academy', type: 'milestone', details: 'Student identity verified.', txId: 'tx_mock_join_binta_001', date: '2023-09-01' },
                    { year: 2024, event: 'Art Competition - Honorable Mention', type: 'award', tokens: 30, details: 'Artistic talent recognized.', txId: 'tx_mock_art_binta_002', date: '2024-05-05' }
                ],
                nftCertificates: [],
                cardanoWallet: { address: 'addr_mock_student_binta_garba_zzzzzzzzzz', adaBalance: 1.2 },
                fees: {
                    totalDue: 50000, paid: 0, balance: 50000,
                    paymentPlan: "Termly",
                    nextDueDate: "2024-05-01",
                    paymentHistory: []
                }
            },
            { id: 'std004', name: 'Emeka Adeyemi', class: 'Grade 6A', did: 'did:prism:mock-emeka-adeyemi-aaaa', eduCoins: 150, academicTimeline: [], nftCertificates: [], cardanoWallet: { address: 'addr_mock_student_emeka_adeyemi_aaaaaa', adaBalance: 0.8 }, fees: { totalDue: 55000, paid: 20000, balance: 35000, paymentPlan: 'Termly', nextDueDate: '2024-09-01', paymentHistory: [] } },
            { id: 'std005', name: 'Fatima Sani', class: 'Grade 5A', did: 'did:prism:mock-fatima-sani-bbbb', eduCoins: 120, academicTimeline: [], nftCertificates: [], cardanoWallet: { address: 'addr_mock_student_fatima_sani_bbbbbb', adaBalance: 0.6 }, fees: { totalDue: 50000, paid: 50000, balance: 0, paymentPlan: 'Annually', nextDueDate: 'N/A (Paid in Full)', paymentHistory: [] } },
        ],
        teachers: [
            { id: 'tchr001', name: 'Mr. David Adewale', subject: 'Mathematics', did: 'did:prism:mock-david-adewale-aaaa', teacherTokens: 1350, cardanoWallet: { address: 'addr_mock_teacher_david_adewale_zzzzzzzzzz', adaBalance: 15.0 }, performanceMetrics: { studentSuccessRate: "88%", coursesDeveloped: 3, positiveFeedback: "94%", avgStudentCoinGrowth: 15 } }, // Added avgStudentCoinGrowth
            { id: 'tchr002', name: 'Mrs. Fatima Yusuf', subject: 'English Language', did: 'did:prism:mock-fatima-yusuf-bbbb', teacherTokens: 1020, cardanoWallet: { address: 'addr_mock_teacher_fatima_yusuf_wwwwwwwwww', adaBalance: 12.3 }, performanceMetrics: { studentEngagement: "92%", publications: 1, peerReviews: "Excellent", avgStudentCoinGrowth: 12 } },
            { id: 'tchr003', name: 'Mr. John Okoro', subject: 'Science', did: 'did:prism:mock-john-okoro-cccc', teacherTokens: 800, cardanoWallet: { address: 'addr_mock_teacher_john_okoro_vvvvvvvvvv', adaBalance: 10.0 }, performanceMetrics: { studentEngagement: "85%", publications: 0, peerReviews: "Good", avgStudentCoinGrowth: 10 } },
        ],
        school: {
            name: "Premier Academy", location: "Ibadan, Oyo State", totalStudents: 1285, enrollmentChange: 2, staffAttendance: 98, staffPerformance: 84, credentialsIssued: 352, systemUptime: 99.9, feesCollected: 150500, fundsAllocated: 145000, pendingPayments: 15, badgesEarned: 512, subscriptionTier: "Premium (Mock)",
            did: 'did:prism:mock-premier-academy-sch',
            cardanoWallet: {
                address: 'addr_mock_school_ugbekun_model_xxxxxxxxxxxx',
                adaBalance: 1500.75,
                recentMints: [
                    { type: "Certificate", studentName: "Aisha Bello", txId: "tx_mock_mint_cert001", date: "2023-07-15" },
                    { type: "Award", studentName: "Chinedu Okoro", txId: "tx_mock_mint_debate005", date: "2024-06-01" }
                ],
                tokenTreasury: [
                    { tokenName: "EduCoin", symbol: "EDU", balance: 1000000, policyId: "policy_educoin_mock_v1" },
                    { tokenName: "TeacherDevFund", symbol: "TDF", balance: 50000, policyId: "policy_tdf_mock_v1" }
                ]
            },
            officeFinances: {
                income: [
                    { source: 'School Fees (Term 1)', amount: 150500, date: '2024-02-01', txId: 'tx_income_fees_001', category: 'Tuition' },
                    { source: 'Donation from Alumni', amount: 25000, date: '2024-03-15', txId: 'tx_income_donation_001', category: 'Donation', donorDID: 'did:prism:mock-alumni-assoc-cccc' },
                    { source: 'Grant for Science Lab', amount: 50000, date: '2024-04-10', txId: 'tx_income_grant_001', category: 'Grant', purpose: 'Science Lab Upgrade' }
                ],
                expenses: [
                    { item: 'Staff Salaries (Jan)', amount: 80000, date: '2024-01-30', txId: 'tx_expense_salaries_001', category: 'Salaries', paymentType: 'Batch ADA Transfer' },
                    { item: 'Utility Bills (Electricity)', amount: 15000, date: '2024-02-05', txId: 'tx_expense_utilities_001', category: 'Utilities' },
                    { item: 'New Computers for Lab (Marlowe Contract)', amount: 50000, date: '2024-02-20', txId: 'tx_expense_equipment_001', category: 'Equipment', contractId: 'marlowe_contract_comp001' }
                ],
                budget: [
                    { department: 'Academics', allocated: 70000, spent: 45000, details: "Textbooks, learning materials, software licenses." },
                    { department: 'Infrastructure & Maintenance', allocated: 50000, spent: 50000, details: "Building repairs, IT infrastructure, utilities." },
                    { department: 'Extracurricular Activities', allocated: 25000, spent: 10000, details: "Sports equipment, club funding, event costs." },
                    { department: 'Professional Development (Teachers)', allocated: 15000, spent: 5000, details: "Workshops, training, certifications (funded by TDF tokens)." }
                ]
            }
        },
        libraryBooks: [
            { id: 'lib001', title: 'Introduction to Algebra', author: 'Jane Doe', subject: 'Mathematics', availableCopies: 3, totalCopies: 5, isbn: '978-3-16-148410-0', coverUrl: 'https://placehold.co/100x150/a7f3d0/166534?text=Algebra&font=inter', onChainRecord: 'asset_lib_alg_001' },
            { id: 'lib002', title: 'Nigerian History: A Comprehensive Guide', author: 'John Adebayo', subject: 'History', availableCopies: 5, totalCopies: 5, isbn: '978-1-23-456789-7', coverUrl: 'https://placehold.co/100x150/fecdd3/9f1239?text=History&font=inter', onChainRecord: 'asset_lib_hist_002' },
            { id: 'lib003', title: 'The World of Atoms: Intro to Chemistry', author: 'Ada Lovelace', subject: 'Science', availableCopies: 2, totalCopies: 3, isbn: '978-0-98-765432-1', coverUrl: 'https://placehold.co/100x150/e0e7ff/3730a3?text=Science&font=inter', onChainRecord: 'asset_lib_sci_003' },
            { id: 'lib004', title: 'Shakespeare\'s Hamlet: Annotated Edition', author: 'William Shakespeare', subject: 'Literature', availableCopies: 0, totalCopies: 2, isbn: '978-1-11-222333-4', coverUrl: 'https://placehold.co/100x150/fef9c3/713f12?text=Hamlet&font=inter', onChainRecord: 'asset_lib_lit_004' },
            { id: 'lib005', title: 'Cardano Development for Beginners', author: 'C. Hoskinson (Mock)', subject: 'Technology', availableCopies: 4, totalCopies: 4, isbn: '979-8-12-345678-9', coverUrl: 'https://placehold.co/100x150/cffafe/0891b2?text=Cardano&font=inter', onChainRecord: 'asset_lib_tech_005' }
        ],
        schoolEvents: [
            { id: 'evt001', title: 'Annual Inter-House Sports', date: '2025-06-15', type: 'Sports', description: 'Join us for a day of thrilling athletic competitions! Results and participation badges to be issued as NFTs.', icon: 'fa-futbol', location: 'School Sports Field', requiresRSVP: true },
            { id: 'evt002', title: 'Science Fair Exhibition', date: '2025-07-02', type: 'Academic', description: 'Discover amazing projects by our talented students. Top projects eligible for EduCoin grants.', icon: 'fa-flask', location: 'Main Hall', requiresRSVP: false },
            { id: 'evt003', title: 'PTA Meeting & Governance Vote', date: '2025-07-10', type: 'Meeting', description: 'General PTA meeting followed by a vote on the new playground proposal (see Governance section).', icon: 'fa-users', location: 'School Auditorium', requiresRSVP: true },
            { id: 'evt004', title: 'Cultural Day Celebration', date: '2025-08-01', type: 'Cultural', description: 'Experience the rich cultural diversity of our school. Food stalls accept EduCoins.', icon: 'fa-masks-theater', location: 'School Grounds', requiresRSVP: false },
        ],
        attendanceRecords: {
            'Grade 5A': [
                { studentId: 'std001', studentName: 'Aisha Bello', status: 'Present', date: '2024-05-17', txId: 'tx_att_aisha_20240517' },
                { studentId: 'std003', studentName: 'Binta Garba', status: 'Absent', date: '2024-05-17', reason: 'Sick leave (verified)', txId: 'tx_att_binta_20240517' },
                { studentId: 'std005', studentName: 'Fatima Sani', status: 'Present', date: '2024-05-17', txId: 'tx_att_fatima_20240517' },
            ],
            'Grade 5B': [
                { studentId: 'std003', studentName: 'Binta Garba', status: 'Present', date: '2024-05-17', txId: 'tx_att_binta_20240517_B' },
            ],
            'Grade 6A': [
                { studentId: 'std004', studentName: 'Emeka Adeyemi', status: 'Present', date: '2024-05-17', txId: 'tx_att_emeka_20240517' },
            ],
            'Grade 6B': [
                { studentId: 'std002', studentName: 'Chinedu Okoro', status: 'Present', date: '2024-05-17', txId: 'tx_att_chinedu_20240517' },
            ]
        },
        homeworkAssignments: [
            { id: 'hw001', title: 'Algebra Chapter 3 Exercises', subject: 'Mathematics', dueDate: '2025-05-25', assignedTo: 'Grade 5A', status: 'Pending Submission', details: 'Complete exercises 1-10 on page 45. Submissions can be IPFS links.', submissionType: 'File Upload / IPFS Link', coinsOnCompletion: 10 },
            { id: 'hw002', title: 'Essay: My Favorite Historical Figure', subject: 'History', dueDate: '2025-05-28', assignedTo: 'Grade 6B', status: 'Submitted', details: 'Write a 500-word essay. Plagiarism check will be run.', submissionType: 'Text Entry', submissionTx: 'tx_hw_chinedu_002_sub', coinsOnCompletion: 15 },
            { id: 'hw003', title: 'Photosynthesis Diagram & Explanation', subject: 'Science', dueDate: '2025-06-02', assignedTo: 'Grade 5A', status: 'Graded (A)', details: 'Draw and label the process of photosynthesis. Explain each step. Top submission gets EduCoin bonus.', submissionType: 'File Upload', gradeTx: 'tx_hw_aisha_003_grade', coinsOnCompletion: 20, bonusCoins: 10 }
        ],
        timetable: {
            'Monday': [
                { time: '09:00 - 10:00', subject: 'Mathematics', teacher: 'Mr. Adewale', class: 'Grade 5A', room: '101', resources: ['Textbook Ch.3', 'Online Quiz Portal'] },
                { time: '10:00 - 11:00', subject: 'English', teacher: 'Mrs. Yusuf', class: 'Grade 5A', room: '102', resources: ['Hamlet Act 1 PDF', 'Vocabulary List #5'] },
                { time: '11:00 - 12:00', subject: 'Science', teacher: 'Mr. Okoro', class: 'Grade 5A', room: 'Lab A', resources: ['Experiment Handout', 'Safety Goggles'] },
            ],
            'Tuesday': [
                { time: '09:00 - 10:00', subject: 'History', teacher: 'Mrs. Bello', class: 'Grade 5A', room: '103', resources: ['Ancient Civilizations Slides'] },
                { time: '10:00 - 11:00', subject: 'Mathematics', teacher: 'Mr. Adewale', class: 'Grade 5A', room: '101', resources: ['Geometry Worksheet'] },
            ]
        },
        messages: [
            { id: 'msg001', sender: 'Mr. Adewale', recipientId: 'std001', subject: 'Math Homework Reminder', body: 'Hi Aisha, please remember to submit your math homework by tomorrow. Let me know if you have any questions! You can submit via the portal or an IPFS link.', date: '2025-05-18T10:30:00Z', read: false, type: 'inbox', attachments: [{ name: 'hw_guidelines.pdf', size: '120KB' }] },
            { id: 'msg002', sender: 'Admin Office', recipientId: 'all_teachers', subject: 'Staff Meeting & Marlowe Finance Training', body: 'Dear Teachers, there will be a staff meeting on Friday at 2 PM in the main hall. Agenda: Q3 Review, Upcoming Events, Introduction to Marlowe for transparent expense claims. Attendance is mandatory.', date: '2025-05-17T15:00:00Z', read: true, type: 'inbox' },
            { id: 'msg003', senderId: 'std001', recipient: 'Mr. Adewale', subject: 'Re: Math Homework Reminder', body: 'Thank you, Mr. Adewale. I will submit it soon. I plan to use IPFS for the submission.', date: '2025-05-18T11:00:00Z', read: true, type: 'sent' },
            { id: 'msg004', sender: 'Mrs. Yusuf', recipientId: 'std002', subject: 'English Essay Feedback', body: 'Hi Chinedu, I\'ve reviewed your essay on historical figures. Good work! Remember to proofread carefully for grammar. Your participation in the school play is noted and will count towards your engagement points.', date: '2025-05-20T09:00:00Z', read: false, type: 'inbox' },
            { id: 'msg005', sender: 'Admin Office', recipientId: 'admin', subject: 'System Report: New Certificate Issued', body: 'A new Grade 4 Completion Certificate (NFT) was issued for Aisha Bello on 2023-07-15. TxID: tx_mock_mint_cert001.', date: '2023-07-15T10:00:00Z', read: true, type: 'inbox' }
        ],
        academicSubjects: [
            { id: 'sub001', name: 'Mathematics', department: 'Science & Math', headTeacher: 'Mr. Adewale', description: 'Covers algebra, geometry, calculus, and statistics. Learning outcomes tracked via verifiable credentials.', curriculumLink: 'ipfs://QmMathCurriculumHash' },
            { id: 'sub002', name: 'English Language', department: 'Arts & Humanities', headTeacher: 'Mrs. Yusuf', description: 'Focuses on grammar, literature, comprehension, and creative writing. Portfolios can be minted as NFTs.', curriculumLink: 'ipfs://QmEnglishCurriculumHash' },
            { id: 'sub003', name: 'Basic Science (with Atala PRISM for Lab Access)', department: 'Science & Math', headTeacher: 'Mr. Okoro', description: 'Introduction to physics, chemistry, and biology concepts. Lab access controlled via DIDs.', curriculumLink: 'ipfs://QmScienceCurriculumHash' },
            { id: 'sub004', name: 'Social Studies & Civic Tech', department: 'Arts & Humanities', headTeacher: 'Mrs. Bello', description: 'Explores history, geography, civics, and an introduction to decentralized governance concepts.', curriculumLink: 'ipfs://QmSocialStudiesCurriculumHash' },
        ],
        governanceProposals: [
            {
                id: 'gov001',
                title: 'Increase Library Budget by 10% for Digital Resources',
                submittedBy: 'Mrs. Yusuf (Librarian DID: did:prism:mock-fatima-yusuf-bbbb)',
                date: '2025-05-01',
                status: 'Open for Voting (Ends 2025-05-25)',
                description: 'Proposal to increase the annual library budget by 10,000 ADA (from school treasury) to acquire more digital e-books and subscriptions. Funds to be managed via a Marlowe smart contract for transparent spending on approved vendors.',
                votesFor: 15,
                votesAgainst: 3,
                voters: ['admin', 'tchr001'], // Use IDs to track votes
                requiredQuorum: 20,
                threshold: "51%",
                discourseLink: "ipfs://QmProposalDiscussionGov001"
            },
            {
                id: 'gov002',
                title: 'New Uniform Design for Next Session (Student Vote)',
                submittedBy: 'PTA Committee (DID: did:prism:mock-pta-committee-dddd)',
                date: '2025-04-15',
                status: 'Closed (Approved)',
                description: 'Proposal for a refreshed school uniform design. Mockups attached. Voting was open to all students holding a valid school DID. Results verified on-chain.',
                votesFor: 120,
                votesAgainst: 25,
                voters: [],
                resultTx: 'tx_mock_gov_vote_result_002'
            },
            {
                id: 'gov003',
                title: 'Fund Science Club Project with EduCoins',
                submittedBy: 'Science Club (Rep: Chinedu Okoro)',
                date: '2025-05-10',
                status: 'Open for Voting (Community EduCoin Holders)',
                description: 'Requesting 5000 EduCoins from the community pool to fund a robotics project for inter-school competition. Detailed budget available. Voting open to all EduCoin holders (1 EDU = 1 Vote).',
                votesFor: 8500,
                votesAgainst: 1200,
                voters: ['std001', 'std002'],
                discourseLink: "ipfs://QmProposalDiscussionGov003"
            }
        ],
        schoolStoreItems: [
            { id: 'store001', name: 'School Hoodie', priceEduCoins: 200, priceADA: 15, stock: 50, imageUrl: 'https://placehold.co/150x150/667eea/ffffff?text=Hoodie&font=inter' },
            { id: 'store002', name: 'Advanced Math Workbook', priceEduCoins: 50, priceADA: 5, stock: 100, imageUrl: 'https://placehold.co/150x150/f97316/ffffff?text=Math+Book&font=inter' },
            { id: 'store003', name: 'Guest Lecture Ticket: "AI in Africa"', priceEduCoins: 25, priceADA: 0, stock: 200, type: 'event_ticket', eventId: 'evt_mock_lecture001', imageUrl: 'https://placehold.co/150x150/10b981/ffffff?text=Lecture&font=inter' }
        ],
        professionalDevelopmentCourses: [
            { id: 'pd001', title: 'Marlowe for Educators', provider: 'Cardano Academy (Mock)', costTDF: 100, duration: '4 Weeks', description: 'Learn to create smart contracts for educational applications.', certificateNFT: 'policy_pd_marlowe_cert_v1' },
            { id: 'pd002', title: 'Integrating DIDs in the Classroom', provider: 'Atala PRISM Foundation (Mock)', costTDF: 75, duration: '2 Weeks', description: 'Understand and implement decentralized identity solutions for students.', certificateNFT: 'policy_pd_did_cert_v1' }
        ],
        // New Gamification Data
        rewardCriteria: [
            { id: 'crit001', name: 'Pass Exam (>=70%)', type: 'Academic', coins: 50, autoTrigger: true, description: 'Awarded automatically for scoring 70% or higher in any major exam.' },
            { id: 'crit002', name: 'Complete Homework On Time', type: 'Academic', coins: 10, autoTrigger: true, description: 'Awarded for each homework submitted before the deadline.' },
            { id: 'crit003', name: 'Active Class Participation', type: 'Engagement', coins: 5, autoTrigger: false, description: 'Awarded by teacher for notable participation.' },
            { id: 'crit004', name: 'Read a Library Book (Verified)', type: 'Reading', coinsPer100Pages: 10, autoTrigger: true, description: 'Coins awarded based on pages read, verified by librarian or quiz.' },
            { id: 'crit005', name: 'Volunteer Activity', type: 'Community', coins: 20, autoTrigger: false, description: 'For participation in school-organized volunteer events.' },
            { id: 'crit006', name: 'Club Leadership Role', type: 'Leadership', coins: 50, autoTrigger: true, perTerm: true, description: 'Awarded per term for holding a leadership position in a school club.' },
            { id: 'crit007', name: 'Competition Winner (School Level)', type: 'Achievement', coins: 100, autoTrigger: false, description: 'For winning internal school competitions.' },
            { id: 'crit008', name: 'Perfect Attendance (Monthly)', type: 'Attendance', coins: 25, autoTrigger: true, description: 'Awarded for no absences or tardies in a month.' }
        ],
        leaderboard: [ // Top 5 students by EduCoins
            { studentId: 'std002', name: 'Chinedu Okoro', eduCoins: 550, rank: 1 },
            { studentId: 'std001', name: 'Aisha Bello', eduCoins: 325, rank: 2 },
            { studentId: 'std003', name: 'Binta Garba', eduCoins: 210, rank: 3 },
            { studentId: 'std004', name: 'Emeka Adeyemi', eduCoins: 150, rank: 4 },
            { studentId: 'std005', name: 'Fatima Sani', eduCoins: 120, rank: 5 },
        ]
    }
};

// --- DOM ELEMENTS ---
// Get references to key DOM elements for efficient access
const loginPage = document.getElementById('loginPage');
const dashboardArea = document.getElementById('dashboardArea');
const sidebar = document.getElementById('sidebar');
const sidebarNav = document.getElementById('sidebarNav');
const mainContent = document.getElementById('mainContent');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const roleSelect = document.getElementById('role');
const usernameInput = document.getElementById('username');
const modalsContainer = document.getElementById('modalsContainer');
const verifyRecordPublicButton = document.getElementById('verifyRecordPublicButton');
const connectWalletButton = document.getElementById('connectWalletButton');

// Mobile Navigation Elements
const hamburgerButton = document.getElementById('hamburgerButton');
const sidebarMobileOverlay = document.getElementById('sidebarMobileOverlay');
const mobileNav = document.getElementById('mobileNav');

// --- CHART INSTANCES ---
let enrollmentChartInstance, credentialTypeChartInstance, financialChartInstance;

// --- UTILITY FUNCTIONS ---

/**
 * Generates a consistent hex color from a string for avatars.
 * @param {string} str - The input string (e.g., username).
 * @returns {string} A 6-digit hex color code.
 */
const getHexColorFromString = (str) => {
    let hash = 0;
    if (!str || str.length === 0) return "A0AEC0"; // Default color if string is empty
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; // Convert to 32bit integer
    }
    const color = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return "00000".substring(0, 6 - color.length) + color;
};

/**
 * Applies the current theme ('light' or 'dark') to the document.
 */
const applyTheme = () => {
    if (AppState.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Update theme toggle icons
    const themeToggleInSidebar = document.getElementById('themeToggleInSidebar');
    if (themeToggleInSidebar) {
        themeToggleInSidebar.innerHTML = AppState.theme === 'dark'
            ? '<i class="fas fa-sun fa-fw"></i>'
            : '<i class="fas fa-moon fa-fw"></i>';
        themeToggleInSidebar.title = AppState.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
    const mainThemeToggle = document.getElementById('themeToggle');
    if (mainThemeToggle && !themeToggleInSidebar) { // Only update if dynamic one isn't present yet
        mainThemeToggle.innerHTML = AppState.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
};

/**
 * Toggles the application theme between 'light' and 'dark'.
 */
const toggleTheme = () => {
    AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ugbekunTheme', AppState.theme);
    applyTheme();
    // Re-initialize charts to apply new theme colors if on admin dashboard
    if (typeof initializeAdminCharts === "function" && AppState.currentPage === 'adminDashboard') {
        initializeAdminCharts();
    }
    // Re-render gamification page to update colors of charts/progress bars if any exist there
    if (typeof renderGamificationPage === "function" && (AppState.currentPage === 'gamification' || AppState.currentPage === 'gamificationSettings')) {
        renderMainContent();
    }
};

/**
 * Toggles the visibility of a sidebar submenu.
 * @param {string} submenuId - The ID of the submenu to toggle.
 */
window.toggleSubmenu = (submenuId) => {
    AppState.openSubmenus[submenuId] = !AppState.openSubmenus[submenuId];
    const submenu = document.getElementById(submenuId);
    const icon = submenu?.previousElementSibling?.querySelector('.fa-chevron-down');
    if (submenu) {
        submenu.classList.toggle('open');
        icon?.classList.toggle('rotate-180');
    }
};

/**
 * Navigates to a specified page, updates the sidebar, and scrolls to top.
 * @param {string} page - The ID of the page to navigate to.
 */
const navigateTo = (page) => {
    AppState.currentPage = page;
    // Remove 'active' class from all sidebar links
    sidebarNav?.querySelectorAll('.sidebar-link.active').forEach(link => link.classList.remove('active'));
    renderSidebar(); // Re-render sidebar to apply active state and correct submenu open states
    renderMainContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (AppState.isMobileSidebarOpen) {
        toggleMobileSidebar(true); // Close mobile sidebar on navigation
    }
    updateMobileNavActiveState(); // Update mobile nav active state
};

/**
 * Shows the login page and hides the dashboard.
 */
const showLoginPage = () => {
    document.body.classList.add('login-page-active');
    loginPage.classList.remove('hidden');
    loginPage.classList.add('flex');
    dashboardArea.classList.add('hidden');
    dashboardArea.classList.remove('flex');
    AppState.currentPage = 'login';
    AppState.currentUser = null;
    AppState.openSubmenus = {}; // Reset open submenus on logout
    if (AppState.isMobileSidebarOpen) {
        toggleMobileSidebar(true); // Ensure sidebar is closed on logout
    }
};

/**
 * Shows the dashboard and hides the login page.
 * Navigates to the appropriate dashboard based on the current user's role.
 */
const showDashboard = () => {
    document.body.classList.remove('login-page-active');
    loginPage.classList.add('hidden');
    loginPage.classList.remove('flex');
    dashboardArea.classList.remove('hidden');
    dashboardArea.classList.add('flex');

    let initialPage;
    switch (AppState.currentUser.role) {
        case 'student': initialPage = 'studentDashboard'; break;
        case 'teacher': initialPage = 'teacherDashboard'; break;
        case 'admin': initialPage = 'adminDashboard'; break;
        case 'parent': initialPage = 'parentDashboard'; break;
        default: initialPage = 'studentDashboard';
    }
    AppState.openSubmenus = {}; // Reset open submenus on login
    navigateTo(initialPage);
};

/**
 * Displays a modal dialog.
 * @param {string} id - The ID for the modal element.
 * @param {string} title - The title of the modal.
 * @param {string} bodyContent - The HTML content for the modal body.
 * @param {string} [footerContent=''] - The HTML content for the modal footer (e.g., buttons).
 */
const showModal = (id, title, bodyContent, footerContent = '') => {
    closeModal(id); // Ensure any existing modal with the same ID is closed first

    const modalHTML = `
        <div id="${id}" class="modal-backdrop fixed inset-0 z-40 flex items-center justify-center p-4 opacity-0 pointer-events-none" onclick="if(event.target===this)closeModal('${id}');">
            <div class="modal-content card w-full max-w-lg p-0 transform scale-95 opacity-0 max-h-[90vh] flex flex-col rounded-lg">
                <div class="flex justify-between items-center p-5 border-b">
                    <h3 class="text-xl font-semibold brand-text">${title}</h3>
                    <button class="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100" onclick="closeModal('${id}')" aria-label="Close">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div class="p-6 flex-grow overflow-y-auto text-slate-600">${bodyContent}</div>
                ${footerContent ? `<div class="p-4 border-t text-right space-x-2 bg-slate-50 rounded-b-lg">${footerContent}</div>` : ''}
            </div>
        </div>
    `;
    modalsContainer.insertAdjacentHTML('beforeend', modalHTML);

    // Animate modal in
    const modalElement = document.getElementById(id);
    // Force reflow to ensure transition plays
    void modalElement.offsetWidth;
    modalElement.classList.remove('opacity-0', 'pointer-events-none');
    modalElement.classList.add('opacity-100');

    const modalContentElement = modalElement.querySelector('.modal-content');
    modalContentElement.classList.remove('scale-95', 'opacity-0');
    modalContentElement.classList.add('scale-100', 'opacity-100');
};

/**
 * Closes a modal dialog.
 * @param {string} id - The ID of the modal to close.
 */
const closeModal = (id) => {
    const modalElement = document.getElementById(id);
    if (modalElement) {
        modalElement.classList.add('opacity-0');
        const modalContentElement = modalElement.querySelector('.modal-content');
        if (modalContentElement) {
            modalContentElement.classList.add('scale-95', 'opacity-0');
        }
        // Remove modal from DOM after transition
        setTimeout(() => {
            modalElement.remove();
        }, 300);
    }
};

let toastCount = 0;
/**
 * Displays a toast notification.
 * @param {string} msg - The message to display.
 * @param {string} [type='success'] - The type of toast ('success', 'error', 'info').
 * @param {number} [duration=5000] - How long the toast should be visible in milliseconds.
 */
const showToast = (msg, type = 'success', duration = 5000) => {
    toastCount++;
    const toastId = `toast-${toastCount}`;
    let bgColor, textColor, iconClass, borderColor, progressColor;

    switch (type) {
        case 'success':
            bgColor = 'bg-green-500';
            textColor = 'text-white';
            iconClass = 'fa-check-circle';
            borderColor = 'border-green-600';
            progressColor = 'bg-green-300';
            break;
        case 'error':
            bgColor = 'bg-red-500';
            textColor = 'text-white';
            iconClass = 'fa-exclamation-circle';
            borderColor = 'border-red-600';
            progressColor = 'bg-red-300';
            break;
        case 'info':
            bgColor = 'bg-sky-500';
            textColor = 'text-white';
            iconClass = 'fa-info-circle';
            borderColor = 'border-sky-600';
            progressColor = 'bg-sky-300';
            break;
        default:
            bgColor = 'bg-slate-700';
            textColor = 'text-white';
            iconClass = 'fa-bell';
            borderColor = 'border-slate-800';
            progressColor = 'bg-slate-500';
    }

    const toastHTML = `
        <div id="${toastId}" class="${bgColor} ${textColor} p-4 rounded-lg shadow-xl flex items-start space-x-3 transition-all duration-300 opacity-0 transform translate-y-5 border-l-4 ${borderColor} relative overflow-hidden">
            <i class="fas ${iconClass} text-xl mt-0.5"></i>
            <span class="flex-grow text-sm">${msg}</span>
            <button onclick="this.closest('#${toastId}').remove()" class="ml-auto text-xl leading-none opacity-70 hover:opacity-100 p-1 -mr-1 -mt-1" aria-label="Close">&times;</button>
            <div class="absolute bottom-0 left-0 h-1 ${progressColor} animate-toast-progress" style="animation-duration:${duration}ms;"></div>
        </div>
        <style>
            @keyframes toast-progress {
                0% { width: 100% }
                100% { width: 0% }
            }
            .animate-toast-progress { animation-name: toast-progress; animation-timing-function: linear }
        </style>
    `;

    const toastContainer = document.getElementById('toastContainer');
    if (toastContainer) {
        toastContainer.insertAdjacentHTML('beforeend', toastHTML);
        const toastElement = document.getElementById(toastId);
        // Force reflow to ensure transition plays
        void toastElement.offsetWidth;
        toastElement.classList.remove('opacity-0', 'translate-y-5');
        toastElement.classList.add('opacity-100', 'translate-y-0');

        setTimeout(() => {
            if (toastElement) {
                toastElement.classList.add('opacity-0');
                toastElement.style.transform = 'translateX(120%)'; // Slide out to the right
                setTimeout(() => toastElement.remove(), 300); // Remove after slide out
            }
        }, duration);
    } else {
        console.error("Toast container not found!");
    }
};

// --- UI RENDERING FUNCTIONS ---

/**
 * Renders the sidebar navigation based on the current user's role.
 */
const renderSidebar = () => {
    const user = AppState.currentUser;
    const sidebarHeader = document.getElementById('sidebarHeader');

    if (user && sidebarHeader) {
        let avatarText = user.username.charAt(0).toUpperCase();
        let userDisplayName = user.username;
        let userRoleDisplay = user.role.charAt(0).toUpperCase() + user.role.slice(1);

        if (user.role === 'student') {
            const studentData = AppState.mockData.students.find(s => s.id === user.studentId);
            if (studentData) {
                avatarText = studentData.name.charAt(0).toUpperCase();
                userDisplayName = studentData.name.split(' ')[0];
            }
        } else if (user.role === 'teacher') {
            const teacherData = AppState.mockData.teachers.find(t => t.name.toLowerCase().includes(user.username.toLowerCase())) || AppState.mockData.teachers[0];
            if (teacherData) {
                avatarText = teacherData.name.charAt(0).toUpperCase();
                userDisplayName = teacherData.name.split(' ')[0];
            }
        }

        sidebarHeader.innerHTML = `
            <div class="flex-grow">
                <img src="https://ugbekun2.metaspaceconsult.com/uploads/app_image/logo-small.png" alt="Ugbekun Logo" class="h-10" onerror="this.src='https://placehold.co/120x30/000000/ffffff?text=Logo&font=inter'">
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">${userRoleDisplay} Portal</p>
            </div>
            <div class="flex items-center space-x-3">
                <button id="themeToggleInSidebar" class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors" title="Toggle Theme">
                    ${AppState.theme === 'dark' ? '<i class="fas fa-sun fa-fw"></i>' : '<i class="fas fa-moon fa-fw"></i>'}
                </button>
                <div class="flex flex-col items-center">
                    <img id="sidebarUserAvatar" src="https://placehold.co/36x36/${getHexColorFromString(user.username)}/ffffff?text=${avatarText}&font=inter&font-size=16" alt="${userDisplayName}'s Avatar" class="w-9 h-9 rounded-full border-2 border-slate-300 dark:border-slate-600 object-cover">
                    <span class="text-xs mt-1 text-slate-600 dark:text-slate-300">${userDisplayName}</span>
                </div>
                <button id="closeSidebarButtonDynamic" class="lg:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors" title="Close Menu">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        // Attach event listeners to dynamically created elements
        document.getElementById('themeToggleInSidebar')?.addEventListener('click', toggleTheme);
        document.getElementById('closeSidebarButtonDynamic')?.addEventListener('click', () => toggleMobileSidebar(true));
    }

    // Helper for creating sidebar links and categories
    const createLink = (page, icon, text) => `
        <a href="#" class="sidebar-link flex items-center space-x-3" data-page="${page}">
            <i class="fas ${icon} fa-fw"></i><span class="text-sm">${text}</span>
        </a>`;

    const createCategory = (id, icon, text, sublinks) => `
        <div class="sidebar-category">
            <div class="flex items-center space-x-3 cursor-pointer sidebar-link" onclick="toggleSubmenu('${id}')">
                <i class="fas ${icon} fa-fw"></i>
                <span class="text-sm font-medium flex-grow">${text}</span>
                <i class="fas fa-chevron-down ml-auto transform transition-transform duration-200 ${AppState.openSubmenus[id] ? 'rotate-180' : ''}"></i>
            </div>
            <div id="${id}" class="sidebar-submenu ${AppState.openSubmenus[id] ? 'open' : ''} ml-3 space-y-0.5">
                ${sublinks.map(sub => createLink(sub.page, sub.icon, sub.text)).join('')}
            </div>
        </div>`;

    let links = '';

    // Cardano Core Section
    if (['student', 'teacher', 'admin'].includes(AppState.currentUser.role)) {
        links += `<div class="pt-2 pb-1 px-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">Cardano Core</div>`;
        if (AppState.currentUser.role === 'student') {
            links += createLink('studentDashboard', 'fa-user-graduate', 'My Academic Passport');
            links += createLink('studentWallet', 'fa-wallet', 'My Cardano Wallet');
            links += createLink('gamification', 'fa-trophy', 'Rewards & Progress');
        }
        if (AppState.currentUser.role === 'teacher') {
            links += createLink('teacherDashboard', 'fa-chalkboard-teacher', 'Teacher Dashboard');
            links += createLink('teacherRewards', 'fa-coins', 'My Rewards & Wallet');
            links += createLink('teacherProfessionalDevelopment', 'fa-award', 'Professional Development');
            links += createLink('gamification', 'fa-star', 'Student Gamification');
        }
        if (AppState.currentUser.role === 'admin') {
            links += createLink('adminDashboard', 'fa-tachometer-alt', 'Admin Dashboard');
            links += createLink('adminCredentials', 'fa-certificate', 'Credentials (NFTs)');
            links += createLink('adminSchoolWallet', 'fa-university', 'School Cardano Wallet');
            links += createLink('adminApiDocs', 'fa-code', 'API & Interoperability');
            links += createLink('adminGovernance', 'fa-landmark', 'Governance (Voting)');
            links += createLink('adminAuditLog', 'fa-history', 'Audit Log');
            links += createLink('gamificationSettings', 'fa-cogs', 'Gamification Settings');
        }
    }
    if (AppState.currentUser.role === 'parent') {
        links += createLink('parentDashboard', 'fa-child', 'My Child\'s Progress');
    }

    // School Management Section
    links += `<div class="pt-4 pb-1 px-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">School Management</div>`;

    // Academic Submenu
    if (['admin', 'teacher', 'student'].includes(AppState.currentUser.role)) {
        const academicSublinks = [];
        if (['admin', 'teacher'].includes(AppState.currentUser.role)) {
            academicSublinks.push({ page: 'academicSubjects', icon: 'fa-book', text: 'Subjects' });
            academicSublinks.push({ page: 'academicTimetable', icon: 'fa-calendar-days', text: 'Timetable' });
        }
        if (['admin', 'teacher', 'student'].includes(AppState.currentUser.role)) {
            academicSublinks.push({ page: 'homework', icon: 'fa-pencil-ruler', text: 'Homework' });
        }
        if (['admin', 'teacher'].includes(AppState.currentUser.role)) {
            academicSublinks.push({ page: 'examMaster', icon: 'fa-file-signature', text: 'Exam Master' });
        }
        if (['teacher', 'student'].includes(AppState.currentUser.role)) {
            academicSublinks.push({ page: 'onlineExam', icon: 'fa-laptop-code', text: 'Online Exams' });
        }
        if (academicSublinks.length > 0) links += createCategory('academicSubmenu', 'fa-graduation-cap', 'Academic', academicSublinks);
    }

    // Learning Tools Submenu
    if (['admin', 'teacher', 'student'].includes(AppState.currentUser.role)) {
        const learningSublinks = [];
        if (['teacher', 'student'].includes(AppState.currentUser.role)) {
            learningSublinks.push({ page: 'liveClassRooms', icon: 'fa-video', text: 'Live Classrooms' });
            learningSublinks.push({ page: 'attachmentsBook', icon: 'fa-paperclip', text: 'Attachments Book' });
        }
        if (['admin', 'teacher', 'student'].includes(AppState.currentUser.role)) {
            learningSublinks.push({ page: 'library', icon: 'fa-book-open', text: 'Library' });
            learningSublinks.push({ page: 'schoolStore', icon: 'fa-store', text: 'School Store' });
        }
        if (learningSublinks.length > 0) links += createCategory('learningSubmenu', 'fa-chalkboard', 'Learning Tools', learningSublinks);
    }

    // Admin-specific modules
    if (AppState.currentUser.role === 'admin') {
        links += createCategory('frontOfficeSubmenu', 'fa-concierge-bell', 'Front Office', [
            { page: 'reception', icon: 'fa-user-friends', text: 'Reception' },
            { page: 'admission', icon: 'fa-user-plus', text: 'Admission' },
        ]);
        links += createCategory('peopleMgmtSubmenu', 'fa-users-cog', 'People Management', [
            { page: 'adminStudents', icon: 'fa-user-graduate', text: 'Student Details' },
            { page: 'adminParents', icon: 'fa-user-shield', text: 'Parents' },
            { page: 'adminTeachers', icon: 'fa-user-tie', text: 'Staff / Teachers' },
            { page: 'humanResource', icon: 'fa-sitemap', text: 'Human Resource' },
        ]);
        links += createLink('cardManagement', 'fa-id-card', 'ID Card Management');
    }

    // Shared modules
    if (['admin', 'teacher'].includes(AppState.currentUser.role)) {
        links += createLink('attendance', 'fa-user-check', 'Attendance');
    }
    if (['admin', 'teacher', 'student', 'parent'].includes(AppState.currentUser.role)) {
        links += createLink('events', 'fa-calendar-star', 'Events');
        links += createLink('messaging', 'fa-envelope-open-text', 'Messaging');
    }

    // Accounting & Reports
    if (AppState.currentUser.role === 'admin') {
        links += createCategory('accountingSubmenu', 'fa-coins', 'Finances', [
            { page: 'studentAccounting', icon: 'fa-file-invoice-dollar', text: 'Student Accounting' },
            { page: 'officeAccounting', icon: 'fa-landmark', text: 'Office Accounting' },
        ]);
        links += createLink('bulkComms', 'fa-bullhorn', 'Bulk SMS/Email');
        links += createLink('reports', 'fa-chart-pie', 'Reports');
    }
    if (['admin', 'teacher'].includes(AppState.currentUser.role) && AppState.currentUser.role !== 'admin') { // Teacher's own reports link
        links += createLink('reports', 'fa-chart-line', 'My Reports');
    }

    // System Settings (Admin only)
    if (AppState.currentUser.role === 'admin') {
        links += `<div class="pt-4 pb-1 px-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">System</div>`;
        links += createLink('frontendSettings', 'fa-desktop', 'Frontend Settings');
        links += createLink('customDomain', 'fa-globe', 'Custom Domain');
        links += createLink('settings', 'fa-cogs', 'General Settings');
    }

    sidebarNav.innerHTML = links;

    // Add click listeners and active state
    sidebarNav.querySelectorAll('.sidebar-link').forEach(linkEl => {
        // Handle category links (which also have sidebar-link class)
        if (linkEl.parentElement.classList.contains('sidebar-category')) {
            // Only add if it's not a category header (which has onclick already)
            if (!linkEl.hasAttribute('onclick')) {
                if (linkEl.dataset.page === AppState.currentPage) {
                    linkEl.classList.add('active');
                    const parentSubmenu = linkEl.closest('.sidebar-submenu');
                    if (parentSubmenu && !parentSubmenu.classList.contains('open')) {
                        AppState.openSubmenus[parentSubmenu.id] = true;
                        parentSubmenu.classList.add('open');
                        const chevron = parentSubmenu.previousElementSibling.querySelector('.fa-chevron-down');
                        if (chevron) chevron.classList.add('rotate-180');
                    }
                }
                linkEl.addEventListener('click', (e) => {
                    e.preventDefault();
                    navigateTo(linkEl.dataset.page);
                });
            }
        } else { // Regular top-level links
            if (linkEl.dataset.page === AppState.currentPage) {
                linkEl.classList.add('active');
            }
            linkEl.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(linkEl.dataset.page);
            });
        }
    });
    updateMobileNavActiveState(); // Update mobile nav active state
};

/**
 * Renders the main content area based on the current page in AppState.
 */
const renderMainContent = () => {
    mainContent.innerHTML = ''; // Clear previous content
    let pageTitle = AppState.currentPage.replace(/([A-Z])/g, ' $1').trim();
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

    // Only add a generic title if it's not a dashboard or a page that renders its own title
    if (!['adminDashboard', 'studentDashboard', 'teacherDashboard', 'parentDashboard', 'gamification', 'gamificationSettings'].includes(AppState.currentPage)) {
        mainContent.innerHTML = `<h1 class="text-3xl font-bold mb-8 capitalize brand-text">${pageTitle}</h1>`;
    }

    let content = mainContent.innerHTML; // Preserve the title if added

    // Helper for placeholder pages
    const placeholderPage = (title, description, iconClass = "fa-question-circle", additionalNotes = "") => `
        <div class="card p-6 md:p-8 rounded-lg placeholder-container">
            <i class="fas ${iconClass} placeholder-icon"></i>
            <h2 class="placeholder-title">${title}</h2>
            <p class="placeholder-description">${description}</p>
            ${additionalNotes ? `<div class="mt-4 text-sm text-slate-500 bg-slate-100 p-4 rounded-md border border-slate-200">${additionalNotes}</div>` : ''}
            <div class="placeholder-info-box">
                <i class="fas fa-info-circle"></i>
                This feature is part of the Ugbekun SMSUP+ vision. For the hackathon demo, this is a placeholder. Full functionality would be developed in the complete product.
            </div>
        </div>`;

    switch (AppState.currentPage) {
        case 'adminDashboard':
            content += renderAdminDashboard();
            // Charts need to be initialized after their canvas elements are in the DOM
            setTimeout(initializeAdminCharts, 0);
            break;
        case 'studentDashboard':
            content += renderStudentDashboard();
            break;
        case 'studentWallet':
            content += renderStudentWallet();
            break;
        case 'teacherDashboard':
            content += renderTeacherDashboard();
            break;
        case 'teacherRewards':
        case 'teacherWallet': // Teacher wallet is the same as teacher rewards for this demo
            content += renderTeacherWallet();
            break;
        case 'adminCredentials':
            content += renderAdminCredentials();
            setTimeout(() => renderAdminCredentialListTable('adminCredentialList'), 0);
            break;
        case 'adminSchoolWallet':
            content += renderAdminSchoolWallet();
            break;
        case 'adminApiDocs':
            content += placeholderPage('API & Interoperability', 'Ugbekun SMSUP+ is designed for a connected educational future. We envision robust APIs to enable seamless integration, leveraging Cardano for secure data exchange and verification.', 'fa-code',
                `<div class="info-box-blockchain mt-4"><strong>Cardano Integration Points:</strong> APIs would expose endpoints for Atala PRISM DID resolution, NFT certificate verification against on-chain data, and interaction with Marlowe financial contracts, enabling trusted third-party integrations.</div>`);
            break;
        case 'parentDashboard':
            content += renderParentDashboard();
            break;
        case 'library':
            content += renderLibraryPage();
            setTimeout(renderLibraryBooks, 0); // Render books after the container is in DOM
            break;
        case 'events':
            content += renderEventsPage();
            setTimeout(renderSchoolEvents, 0);
            break;
        case 'attendance':
            content += renderAttendancePage();
            setTimeout(renderAttendanceTable, 0);
            break;
        case 'homework':
            content += renderHomeworkPage();
            setTimeout(renderHomeworkList, 0);
            break;
        case 'academicTimetable':
            content += renderAcademicTimetablePage();
            setTimeout(renderAcademicTimetable, 0);
            break;
        case 'messaging':
            content += renderMessagingPage();
            // Event listeners for messaging page are handled inside renderMessagingPage for dynamic content
            break;
        case 'academicSubjects':
            content += renderAcademicSubjectsPage();
            break;
        case 'adminGovernance':
            content += renderAdminGovernancePage();
            break;
        case 'studentAccounting':
            content += renderStudentAccountingPage();
            setTimeout(() => {
                const firstStudentId = AppState.mockData.students[0]?.id;
                if (firstStudentId) renderStudentFeeDetails(firstStudentId);
            }, 0);
            break;
        case 'officeAccounting':
            content += renderOfficeAccountingPage();
            break;
        case 'gamification':
        case 'gamificationSettings':
            content += renderGamificationPage();
            break;
        case 'teacherStudents':
            content += renderTeacherStudentsPage();
            break;
        case 'adminStudents':
            content += renderAdminStudentsPage();
            break;
        case 'schoolStore':
            content += renderSchoolStorePage();
            break;
        case 'teacherProfessionalDevelopment':
            content += renderTeacherProfessionalDevelopmentPage();
            break;
        // --- Standard SMS Features (Placeholders with Icons) ---
        case 'adminTeachers': content += placeholderPage('Manage Staff / Teachers', 'Admins manage teacher and staff accounts, roles, permissions, and can view performance metrics here.', 'fa-chalkboard-teacher'); break;
        case 'adminParents': content += placeholderPage('Manage Parents', 'Admins manage parent accounts, link them to students, and oversee parent-teacher communication channels.', 'fa-user-shield'); break;
        case 'examMaster': content += placeholderPage('Exam Master', 'Create, schedule, and manage examinations, including question banks and grading schemes.', 'fa-file-alt'); break;
        case 'onlineExam': content += placeholderPage('Online Exams', 'Students take exams online. Teachers can monitor and grade submissions.', 'fa-laptop-house'); break;
        case 'liveClassRooms': content += placeholderPage('Live Classrooms', 'Integrate with video conferencing tools for live online classes.', 'fa-video'); break;
        case 'attachmentsBook': content += placeholderPage('Attachments Book', 'A repository for sharing educational materials, notes, and resources.', 'fa-folder-open'); break;
        case 'reception': content += placeholderPage('Reception / Front Desk', 'Manage visitor logs, inquiries, and general front office tasks.', 'fa-concierge-bell'); break;
        case 'admission': content += placeholderPage('Admission Management', 'Handle student admission applications, interviews, and enrollment processes. Cardano DIDs (Atala PRISM) could streamline identity verification.', 'fa-user-plus'); break;
        case 'humanResource': content += placeholderPage('Human Resource', 'Manage staff profiles, payroll (potentially with Cardano payments), leave requests, and performance reviews.', 'fa-users-cog'); break;
        case 'cardManagement': content += placeholderPage('ID Card Management', 'Design, issue, and manage student and staff ID cards. These could be digital (NFTs) or physical cards linked to their Cardano Digital ID.', 'fa-id-card-alt'); break;
        case 'bulkComms': content += placeholderPage('Bulk SMS/Email', 'Send announcements and notifications to groups of users.', 'fa-paper-plane'); break;
        case 'reports': content += placeholderPage('Reports & Analytics', 'Generate various reports on student performance, attendance, finances, etc.', 'fa-chart-bar'); break;
        case 'adminAuditLog': content += placeholderPage('Full Audit Log', 'Detailed, searchable log of all critical system and blockchain-recorded activities.', 'fa-clipboard-list'); break;
        case 'frontendSettings': content += placeholderPage('Frontend Settings', 'Customize the public-facing elements of the school portal.', 'fa-paint-brush'); break;
        case 'customDomain': content += placeholderPage('Custom Domain', 'Configure the school portal to use a custom domain name.', 'fa-globe-americas'); break;
        case 'settings': content += placeholderPage('General Settings', 'Configure overall system settings, academic years, grading systems, language preferences, and manage data privacy consent options.', 'fa-cogs'); break;
        case 'helpTutorials': content += placeholderPage('Help & Tutorials', 'Access user guides, video tutorials, and FAQs for using Ugbekun SMSUP+.', 'fa-question-circle'); break;
        case 'support': content += placeholderPage('Support', 'Contact the Ugbekun SMSUP+ support team for assistance.', 'fa-life-ring'); break;
        default:
            content += `<p class="text-slate-500 p-6 text-center">This section is under construction for the demo. Please select an option from the sidebar.</p>`;
    }
    mainContent.innerHTML = content;
    updateMobileNavActiveState(); // Update active state for mobile nav after content render
};

// --- DETAILED MOCK PAGE RENDERERS ---

/**
 * Renders the Admin Dashboard content.
 * @returns {string} The HTML string for the Admin Dashboard.
 */
const renderAdminDashboard = () => {
    const school = AppState.mockData.school;
    return `
        <div class="main-dashboard-grid">
            <div class="dashboard-main-column space-y-6">
                <div class="card glassmorphism rounded-xl p-6 md:p-8">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200" id="school-name">${school.name}</h2>
                            <p class="text-sm text-gray-500 dark:text-gray-400" id="school-location">${school.location}</p>
                        </div>
                        <div class="flex space-x-2">
                            <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse" title="System Online"></span>
                            <span class="w-3 h-3 bg-yellow-500 rounded-full" title="Notifications Pending"></span>
                            <span class="w-3 h-3 bg-red-500 rounded-full" title="Security Alert (Mock)"></span>
                        </div>
                    </div>
                    <div class="mb-8 p-4 bg-white bg-opacity-80 dark:bg-slate-700/30 rounded-lg shadow-sm">
                        <h3 class="text-lg font-medium text-gray-600 dark:text-gray-300 mb-1">Total Active Students</h3>
                        <div class="flex items-end justify-between mb-3">
                            <p class="text-5xl font-bold text-gray-700 dark:text-gray-100" id="total-students">${school.totalStudents.toLocaleString()}</p>
                            <p class="text-sm text-green-600 dark:text-green-400 font-medium">+${school.enrollmentChange}% This Term</p>
                        </div>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">Enrollment Overview</p>
                        <div class="h-40 md:h-48"><canvas id="adminEnrollmentChart"></canvas></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="col-span-1 p-4 bg-white bg-opacity-80 dark:bg-slate-700/30 rounded-lg shadow-sm">
                            <h4 class="text-md font-semibold text-gray-600 dark:text-gray-300 mb-2">Staff Metrics</h4>
                            <div class="flex flex-col sm:flex-row justify-around items-center text-center space-y-3 sm:space-y-0 sm:space-x-2">
                                <div><p class="text-3xl font-bold brand-text-orange" id="staff-attendance">${school.staffAttendance}%</p><p class="text-xs text-gray-500 dark:text-gray-400">Attendance</p></div>
                                <div><p class="text-3xl font-bold brand-text-orange" id="staff-performance">${school.staffPerformance}</p><p class="text-xs text-gray-500 dark:text-gray-400">Avg. Perf. Score</p></div>
                            </div>
                            <p class="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center">Based on verified data</p>
                        </div>
                        <div class="col-span-1 md:col-span-2 p-4 bg-white bg-opacity-80 dark:bg-slate-700/30 rounded-lg shadow-sm flex flex-col sm:flex-row items-center">
                            <div class="flex-1 mr-0 sm:mr-4 mb-3 sm:mb-0 text-center sm:text-left">
                                <h4 class="text-md font-semibold text-gray-600 dark:text-gray-300 mb-1">Credentials Issued (NFTs)</h4>
                                <p class="text-4xl font-bold text-gray-700 dark:text-gray-100" id="credentials-issued">${school.credentialsIssued.toLocaleString()}</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">This Academic Year</p>
                                <p class="text-xs text-green-600 dark:text-green-400">Verification Rate: 100% (Mock)</p>
                                <button class="text-xs brand-text-orange hover:underline mt-2 btn p-1" onclick="navigateTo('adminCredentials')">Manage Credentials</button>
                            </div>
                            <div class="w-28 h-28 mx-auto sm:mx-0"><canvas id="adminCredentialTypeChart"></canvas></div>
                        </div>
                    </div>
                    <div class="p-4 bg-white bg-opacity-80 dark:bg-slate-700/30 rounded-lg shadow-sm mb-6">
                        <h4 class="text-md font-semibold text-gray-600 dark:text-gray-300 mb-3">Financial Overview <span class="cardano-tag marlowe text-xs ml-2"><i class="fas fa-cogs"></i>Marlowe Simulated</span></h4>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-4">
                            <div><p class="text-2xl font-bold text-green-600 dark:text-green-400" id="fees-collected">$${school.feesCollected.toLocaleString()}</p><p class="text-xs text-gray-500 dark:text-gray-400">Fees Collected</p></div>
                            <div><p class="text-2xl font-bold text-gray-700 dark:text-gray-100" id="funds-allocated">$${school.fundsAllocated.toLocaleString()}</p><p class="text-xs text-gray-500 dark:text-gray-400">Allocated Funds</p></div>
                            <div><p class="text-2xl font-bold text-blue-600 dark:text-blue-400" id="pending-payments">${school.pendingPayments}</p><p class="text-xs text-gray-500 dark:text-gray-400">Pending Payments</p></div>
                        </div>
                        <div class="h-40 md:h-48"><canvas id="adminFinancialChart"></canvas></div>
                        <div class="info-box-blockchain">
                            <strong>Smart Contract Automation:</strong> Financial operations like fee collection, fund allocation, and salary payments could be automated using Marlowe smart contracts on Cardano, ensuring transparency and reducing manual overhead.
                        </div>
                        <button class="text-xs brand-text-orange hover:underline mt-3 w-full text-center btn p-1" onclick="navigateTo('studentAccounting')">View Financial Details</button>
                    </div>
                    <div class="text-center mt-4"><p class="text-sm text-gray-500 dark:text-gray-400">Ugbekun Framework: Ensuring Structure & Trust with Cardano</p></div>
                </div>
                <div class="card glassmorphism rounded-xl p-6">
                    <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Recent Secure Activity <span class="cardano-tag text-xs ml-2"><i class="fas fa-link"></i>On-Chain Log (Mock)</span></h3>
                    <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-300 max-h-80 overflow-y-auto pr-2">
                        ${school.cardanoWallet.recentMints.map(item => `
                            <li class="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700 border-opacity-50">
                                <span><i class="fas ${item.type === 'Award' ? 'fa-award text-orange-500' : 'fa-check-circle text-green-500'} mr-2 w-5 text-center"></i>${item.type} issued for ${item.studentName}</span>
                                <a href="https://mock.cardanoscan.io/transaction/${item.txId}" target="_blank" class="tx-id hover:bg-slate-200 dark:hover:bg-slate-600" title="View on Mock Explorer">${item.txId?.substring(0, 10)}...</a>
                            </li>
                        `).join('')}
                        ${AppState.mockData.students[0].academicTimeline.slice(0, 2).map(item => `
                            <li class="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700 border-opacity-50">
                                <span><i class="fas ${item.type === 'award' ? 'fa-award text-orange-500' : 'fa-check-circle text-green-500'} mr-2 w-5 text-center"></i>${item.event}</span>
                                <a href="https://mock.cardanoscan.io/transaction/${item.txId}" target="_blank" class="tx-id hover:bg-slate-200 dark:hover:bg-slate-600" title="View on Mock Explorer">${item.txId?.substring(0, 10)}...</a>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="text-right mt-4"> <a href="#" data-page="adminAuditLog" onclick="event.preventDefault(); navigateTo('adminAuditLog');" class="text-sm brand-text-orange hover:underline font-medium btn p-1">View Full Audit Log <i class="fas fa-arrow-right text-xs ml-1"></i></a></div>
                </div>
            </div>
            <div class="dashboard-side-column space-y-6">
                <div class="card p-6 shadow-lg rounded-lg dark:bg-slate-800">
                    <h2 class="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200">School Subscription</h2>
                    <p class="text-slate-600 dark:text-slate-300"><strong>Tier:</strong> <span class="font-semibold text-green-600 dark:text-green-400">${AppState.mockData.school.subscriptionTier}</span></p>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Token rewards and platform features are supported by the school's subscription plan.</p>
                    <button class="mt-3 w-full btn btn-primary py-2 text-sm">Manage Subscription</button>
                </div>
            </div>
        </div>

        <div id="adminDashboardInfoFooter" class="w-full mt-10 pt-6 pb-4 px-4 md:px-6 bg-opacity-20 bg-slate-100 dark:bg-slate-800 dark:bg-opacity-30 border-t border-slate-200 dark:border-slate-700 rounded-t-xl shadow-inner-top-soft">
            <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 text-center">
                <div class="info-footer-item">
                    <div class="flex justify-center items-center mx-auto mb-3 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-500 dark:text-orange-400">
                        <i class="fas fa-shield-alt text-xl"></i>
                    </div>
                    <h4 class="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Verifiable Identity</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Atala PRISM (DIDs) & Cardano NFTs for secure, self-sovereign identity.</p>
                </div>
                <div class="info-footer-item">
                    <div class="flex justify-center items-center mx-auto mb-3 w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-500/20 text-sky-500 dark:text-sky-400">
                        <i class="fas fa-cogs text-xl"></i>
                    </div>
                    <h4 class="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">System Status</h4>
                    <p class="text-2xl font-bold text-green-600 dark:text-green-400" id="system-uptime">${school.systemUptime}%</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Uptime (30 days)</p>
                </div>
                <div class="info-footer-item">
                    <div class="flex justify-center items-center mx-auto mb-3 w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-500/20 text-yellow-500 dark:text-yellow-400">
                        <i class="fas fa-star text-xl"></i>
                    </div>
                    <h4 class="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Engagement & Rewards</h4>
                    <p class="text-xl font-bold text-slate-700 dark:text-slate-200" id="badges-earned">${school.badgesEarned.toLocaleString()}+</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mb-2">Badges & EduCoins Earned</p>
                    <button class="text-xs text-orange-500 dark:text-orange-400 hover:underline font-medium" onclick="navigateTo('gamification')">View Rewards System</button>
                </div>
            </div>
        </div>
    `;
};

/**
 * Renders the Student Dashboard content.
 * @returns {string} The HTML string for the Student Dashboard.
 */
const renderStudentDashboard = () => {
    const student = AppState.mockData.students.find(s => s.id === AppState.currentUser.studentId) || AppState.mockData.students[0];
    return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="card stat-card stat-card-main p-5 rounded-lg">
                <h3 class="text-slate-500 text-sm font-medium">MY EDUCOINS <span class="tooltip"><i class="fas fa-question-circle text-xs text-slate-400 ml-1"></i><span class="tooltiptext">EduCoins are native tokens on Cardano, earned for achievements. Use them in the school ecosystem or for future Cardano dApp interactions.</span></span></h3>
                <p class="text-4xl font-bold brand-text-secondary mt-1">${student.eduCoins} <i class="fas fa-coins text-yellow-400"></i></p>
                <button class="text-xs brand-text-secondary hover:underline mt-2 btn p-1" onclick="showMineableCertInfo()">What are EduCoins?</button>
            </div>
            <div class="card stat-card stat-card-main p-5 rounded-lg">
                <h3 class="text-slate-500 text-sm font-medium">NFT CERTIFICATES <span class="tooltip"><i class="fas fa-question-circle text-xs text-slate-400 ml-1"></i><span class="tooltiptext">Your academic achievements minted as unique, verifiable Non-Fungible Tokens on the Cardano blockchain.</span></span></h3>
                <p class="text-4xl font-bold brand-text-secondary mt-1">${student.nftCertificates.length}</p>
                <button class="text-xs brand-text-secondary hover:underline mt-2 btn p-1" onclick="navigateTo('studentWallet')">View Wallet</button>
            </div>
            <div class="card stat-card stat-card-red-main p-5 rounded-lg">
                <h3 class="text-slate-500 text-sm font-medium">CURRENT CLASS</h3>
                <p class="text-4xl font-bold text-red-500 mt-1">${student.class}</p>
                <button class="text-xs text-red-500 hover:underline mt-2 btn p-1" onclick="navigateTo('academicTimetable')">View Timetable</button>
            </div>
        </div>
        <div class="card p-6 md:p-8 mb-8 rounded-lg">
            <div class="flex justify-between items-center mb-5">
                <h2 class="text-2xl font-semibold brand-text">My NFT Certificates</h2>
                <button class="btn btn-outline text-sm" onclick="showToast('Mock: Verifying all certificates on CardanoScan...', 'info')"><i class="fas fa-cubes mr-2"></i>Verify All on Chain</button>
            </div>
            ${student.nftCertificates.length > 0 ? student.nftCertificates.map(cert => `
                <div class="nft-card p-4 rounded-lg shadow-md mb-4 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <img src="${cert.imageUrl}" alt="${cert.name}" class="w-full sm:w-28 h-auto sm:h-20 object-cover rounded-md border" onerror="this.src='https://placehold.co/112x80/eeeeee/999999?text=Error&font=inter'">
                    <div class="flex-grow">
                        <h4 class="font-semibold text-sky-700 text-lg">${cert.name}</h4>
                        <p class="text-sm text-slate-600">Issued: ${cert.issueDate} by ${cert.issuer}</p>
                        <p class="text-sm text-slate-600">Embedded Tokens: <span class="font-bold">${cert.embeddedTokens}</span> <i class="fas fa-coins text-yellow-500"></i></p>
                        <p class="text-xs text-slate-500 mt-1">Policy ID: <span class="tx-id">${cert.policyId.substring(0, 15)}...</span></p>
                    </div>
                    <div class="flex flex-col sm:items-end space-y-2 self-start sm:self-center">
                        <button class="btn btn-primary px-3 py-1.5 text-sm w-full sm:w-auto" onclick="showNftExplorer('${student.id}', '${cert.id}')"><i class="fab fa-hive mr-1"></i>View Details</button>
                        <button class="btn btn-success text-xs w-full sm:w-auto" onclick="showToast('Mock: Sharing verifiable credential for ${cert.name} (DID related action)...', 'success')"><i class="fas fa-share-alt mr-1"></i>Share VC</button>
                    </div>
                </div>`).join('') : '<p class="text-slate-500 py-4 text-center">No NFT certificates yet. Keep learning to earn them!</p>'}
        </div>
        <div class="card p-6 md:p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-5 brand-text">My Academic Timeline (On-Chain Verifiable)</h2>
            <ul class="space-y-4">
                ${student.academicTimeline.sort((a, b) => new Date(b.date || b.year) - new Date(a.date || a.year)).map(item => `
                    <li class="border-l-4 ${item.type === 'award' ? 'border-yellow-400' : item.type === 'milestone' ? 'border-sky-500' : 'border-slate-300'} pl-4 py-3 bg-white rounded-r-md shadow hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="font-semibold text-slate-700">${item.event}</span>
                                <span class="text-sm text-slate-500 block sm:inline sm:ml-2">- ${item.year}</span>
                                ${item.txId ? `<a href="https://mock.cardanoscan.io/transaction/${item.txId}" target="_blank" class="block text-xs text-sky-500 hover:underline mt-0.5" title="View Transaction">Tx: ${item.txId.substring(0, 15)}... <i class="fas fa-external-link-alt fa-xs"></i></a>` : ''}
                            </div>
                            ${item.tokens ? `<span class="ml-2 token-balance whitespace-nowrap">+${item.tokens} <i class="fas fa-coins"></i></span>` : ''}
                        </div>
                    </li>`).join('')}
                ${student.academicTimeline.length === 0 ? '<li class="text-slate-500 py-3 text-center">No timeline events yet.</li>' : ''}
            </ul>
        </div>`;
};

/**
 * Renders the Student Wallet content.
 * @returns {string} The HTML string for the Student Wallet page.
 */
const renderStudentWallet = () => {
    const studentForWallet = AppState.mockData.students.find(s => s.id === AppState.currentUser.studentId) || AppState.mockData.students[0];
    return `
        <div class="card p-6 md:p-8 rounded-lg">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-2xl font-semibold brand-text"><i class="fas fa-wallet mr-2"></i>My Cardano Wallet</h2>
                <button class="btn btn-outline text-sm opacity-70 cursor-not-allowed" title="CIP-30 Wallet Connection (Future Feature)"><i class="fas fa-link mr-2"></i>Connect Wallet</button>
            </div>
            <p class="mb-6 text-slate-600 text-sm">This is a simulation of your personal Cardano wallet where your EduCoins and NFT Certificates are securely stored. You have full ownership and control.</p>
            <div class="space-y-4 text-lg">
                <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">Wallet Address (Mock)</p><span class="text-base font-mono text-sky-600 break-all">${studentForWallet.cardanoWallet.address}</span></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">ADA Balance</p><span class="font-bold text-sky-700 text-2xl">${studentForWallet.cardanoWallet.adaBalance} ADA</span></div>
                    <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">EduCoins Balance <span class="tooltip"><i class="fas fa-question-circle text-xs text-slate-400 ml-1"></i><span class="tooltiptext">EduCoins are Cardano Native Tokens.</span></span></p><span class="font-bold text-yellow-500 text-2xl">${studentForWallet.eduCoins} EDU</span></div>
                </div>
                <div class="info-box-blockchain">
                    <strong>Self-Custody:</strong> In a real Ugbekun deployment, you would connect your own Cardano wallet (like Nami, Eternl, Lace) ensuring you always control your assets (NFTs, EduCoins).
                </div>
                <h3 class="font-semibold mt-6 mb-3 text-xl text-gray-700">Owned NFTs (Certificates):</h3>
                ${studentForWallet.nftCertificates.length > 0 ? studentForWallet.nftCertificates.map(nft => `<div class="p-4 border rounded-md bg-sky-50 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow"><img src="${nft.imageUrl}" alt="${nft.name}" class="w-20 h-14 object-cover rounded border" onerror="this.src='https://placehold.co/80x56/eeeeee/999999?text=Error&font=inter'"><div><span class="text-md font-medium text-sky-700">${nft.name}</span><p class="text-xs text-slate-500">Policy ID: <span class="font-mono">${nft.policyId.substring(0, 15)}...</span></p></div><button class="ml-auto btn btn-primary px-3 py-1 text-xs" onclick="showNftExplorer('${studentForWallet.id}', '${nft.id}')">Details</button></div>`).join('') : '<p class="text-sm text-slate-500 py-3 text-center">No NFTs owned in this mock wallet.</p>'}
                <div class="mt-8 flex space-x-3"><button class="btn btn-primary opacity-50 cursor-not-allowed"><i class="fas fa-paper-plane mr-2"></i>Send</button><button class="btn btn-secondary opacity-50 cursor-not-allowed"><i class="fas fa-qrcode mr-2"></i>Receive</button></div>
            </div>
        </div>`;
};

/**
 * Renders the Teacher Dashboard content.
 * @returns {string} The HTML string for the Teacher Dashboard.
 */
const renderTeacherDashboard = () => {
    const teacherForDash = AppState.mockData.teachers.find(t => t.id === AppState.currentUser.teacherId) || AppState.mockData.teachers[0];
    return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="card stat-card stat-card-main p-5 rounded-lg"><h3 class="text-slate-500 text-sm font-medium">TEACHER TOKENS <span class="tooltip"><i class="fas fa-question-circle text-xs text-slate-400 ml-1"></i><span class="tooltiptext">Tokens for professional development, resources, etc. Claimable via mock smart contract.</span></span></h3><p class="text-4xl font-bold text-sky-600 mt-1">${teacherForDash.teacherTokens} <i class="fas fa-medal text-amber-500"></i></p><button class="text-xs text-sky-500 hover:underline mt-2 btn p-1" onclick="navigateTo('teacherRewards')">View Wallet & Claim</button></div>
            <div class="card stat-card stat-card-main p-5 rounded-lg"><h3 class="text-slate-500 text-sm font-medium">STUDENTS MANAGED</h3><p class="text-4xl font-bold text-sky-600 mt-1">${AppState.mockData.students.length}</p><button class="text-xs text-sky-500 hover:underline mt-2 btn p-1" onclick="navigateTo('adminStudents')">View Students</button></div>
            <div class="card stat-card stat-card-red-main p-5 rounded-lg"><h3 class="text-slate-500 text-sm font-medium">PENDING ACTIONS</h3><p class="text-4xl font-bold text-red-500 mt-1">3</p><button class="text-xs text-red-500 hover:underline mt-2 btn p-1" onclick="showToast('Mock: Review 2 assignments, 1 attendance query.', 'info')">View Actions</button></div>
        </div>
        <div class="card p-6 md:p-8 rounded-lg"><h2 class="text-2xl font-semibold mb-5 brand-text">Quick Actions</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><button class="btn btn-primary p-4 text-left" onclick="navigateTo('teacherStudents')"><i class="fas fa-award fa-lg mr-2 mb-1"></i><span class="block font-semibold">Grade Students</span><span class="text-xs opacity-80">Enter grades & award tokens.</span></button><button class="btn btn-primary p-4 text-left" onclick="navigateTo('attendance')"><i class="fas fa-user-check fa-lg mr-2 mb-1"></i><span class="block font-semibold">Take Attendance</span><span class="text-xs opacity-80">Mark daily attendance.</span></button><button class="btn btn-primary p-4 text-left" onclick="navigateTo('homework')"><i class="fas fa-pencil-ruler fa-lg mr-2 mb-1"></i><span class="block font-semibold">Manage Homework</span><span class="text-xs opacity-80">Assign & review homework.</span></button></div></div>`;
};

/**
 * Renders the Teacher Wallet (Rewards) content.
 * @returns {string} The HTML string for the Teacher Wallet page.
 */
const renderTeacherWallet = () => {
    const teacherForWallet = AppState.mockData.teachers.find(t => t.id === AppState.currentUser.teacherId) || AppState.mockData.teachers[0];
    return `
        <div class="card p-6 md:p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-2 brand-text"><i class="fas fa-wallet mr-2"></i>My Simulated Cardano Wallet & Rewards</h2>
            <p class="mb-6 text-slate-600 text-sm"><strong>Note:</strong> This is a simulation. Real rewards would be distributed via smart contracts based on performance metrics. Ugbekun will provide guidance for easy wallet setup.</p>
            <div class="space-y-4 text-lg">
                <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">Wallet Address (Mock)</p><span class="text-base font-mono text-sky-600 break-all">${teacherForWallet.cardanoWallet.address}</span></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">ADA Balance</p><span class="font-bold text-sky-700 text-2xl">${teacherForWallet.cardanoWallet.adaBalance} ADA</span></div>
                    <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">Teacher Tokens <span class="tooltip"><i class="fas fa-question-circle text-xs"></i><span class="tooltiptext">Cardano Native Tokens for teachers.</span></span></p><span class="font-bold text-amber-500 text-2xl">${teacherForWallet.teacherTokens} TCH</span></div>
                </div>
                <div class="info-box-blockchain">
                    <strong>Smart Contract Rewards:</strong> Teacher Tokens could be automatically distributed via a Marlowe smart contract based on achieving milestones or positive student feedback, ensuring fair and transparent reward distribution.
                </div>
                <button class="btn btn-success mt-4" onclick="showToast('Mock: Claiming ${teacherForWallet.teacherTokens} TCH via smart contract... Tx submitted!', 'success')"><i class="fas fa-hand-holding-usd mr-2"></i>Claim Teacher Tokens (Mock)</button>
                <p class="mt-4 text-sm text-slate-600">Teacher tokens can be used for professional development, exchanged, or contribute to a future pension scheme (conceptual).</p>
            </div>
        </div>`;
};

/**
 * Renders the Admin Credentials (NFTs) management page.
 * @returns {string} The HTML string for the Admin Credentials page.
 */
const renderAdminCredentials = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg">
            <div class="flex justify-between items-center mb-3">
                <h2 class="text-2xl font-semibold brand-text">Credential (NFT) Management</h2>
                <span class="cardano-tag"><i class="fas fa-cubes"></i>Cardano NFTs</span>
            </div>
            <p class="text-sm text-slate-600 mb-4"><strong>Secure Credentialing:</strong> Mint academic achievements as Non-Fungible Tokens (NFTs) on the Cardano blockchain. Each NFT is unique, verifiable, and owned by the student. Metadata can be stored on-chain or linked via IPFS for richer details.</p>
            <p class="text-xs text-slate-500 mb-6 p-3 bg-slate-100 rounded-md border"><strong>Transaction Costs:</strong> Cardano transaction fees for minting and transfers are generally low. Ugbekun will employ strategies like batching and efficient contract design to minimize these. Costs may be covered by the school's subscription or a nominal per-transaction fee for certain operations in the full product.</p>
            <button class="btn btn-primary mb-6 text-base" onclick="showIssueCredentialModal()"><i class="fas fa-plus-circle mr-2"></i>Issue New Credential</button>
            <h3 class="text-xl font-medium mb-4 text-gray-700">Issued Credentials (Mock On-Chain Records)</h3>
            <div class="overflow-x-auto glassmorphism rounded-lg p-0.5">
                <table class="min-w-full text-sm data-table">
                    <thead><tr><th>ID</th><th>Type</th><th>Recipient</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
                    <tbody id="adminCredentialList"></tbody>
                </table>
            </div>
        </div>`;
};

/**
 * Renders the table of issued credentials for the admin.
 * @param {string} containerId - The ID of the tbody element to render into.
 */
const renderAdminCredentialListTable = (containerId) => {
    const tbody = document.getElementById(containerId);
    if (!tbody) return;
    tbody.innerHTML = '';
    let allCredentials = [];
    AppState.mockData.students.forEach(student => {
        student.nftCertificates.forEach(cert => {
            allCredentials.push({ ...cert, studentName: student.name, studentId: student.id });
        });
    });
    if (allCredentials.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-slate-500 py-8">No credentials issued yet.</td></tr>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    allCredentials.forEach(cert => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="truncate max-w-[100px]">${cert.id}</td>
            <td>${cert.name.split(' ')[0]}</td>
            <td>${cert.studentName}</td>
            <td>${cert.issueDate}</td>
            <td><span class="px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700">Verified</span></td>
            <td>
                <button class="text-sky-600 hover:text-sky-700 hover:underline text-xs px-2 py-1 rounded-md bg-sky-100 hover:bg-sky-200 transition-colors btn" onclick="showNftExplorer('${cert.studentId}', '${cert.id}')"><i class="fas fa-eye mr-1"></i>View</button>
            </td>
        `;
        fragment.appendChild(row);
    });
    tbody.appendChild(fragment);
};

/**
 * Renders the Admin School Wallet content.
 * @returns {string} The HTML string for the Admin School Wallet page.
 */
const renderAdminSchoolWallet = () => {
    const school = AppState.mockData.school;
    return `
        <div class="card p-6 md:p-8 rounded-lg">
            <div class="flex justify-between items-center mb-3">
                <h2 class="text-2xl font-semibold brand-text"><i class="fas fa-university mr-2"></i>School's Cardano Wallet</h2>
                <span class="cardano-tag"><i class="fas fa-wallet"></i>Operational Wallet</span>
            </div>
            <p class="mb-6 text-slate-600 text-sm">Simulation of the school's operational wallet on Cardano, used for managing school-wide assets, minting fees, and potentially interacting with financial smart contracts.</p>
            <div class="space-y-4 text-lg">
                <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">School Name</p><span class="font-bold text-sky-700 text-xl">${school.name}</span></div>
                <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">Wallet Address</p><span class="text-base font-mono text-sky-600 break-all">${school.cardanoWallet.address}</span></div>
                <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">ADA Balance</p><span class="font-bold text-sky-700 text-2xl">${school.cardanoWallet.adaBalance} ADA</span></div>
                <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">School EduCoin Treasury <span class="tooltip"><i class="fas fa-question-circle text-xs"></i><span class="tooltiptext">The school holds a treasury of EduCoins for various rewards and initiatives.</span></span></p><span class="font-bold text-yellow-500 text-2xl">${school.cardanoWallet.tokenTreasury.find(t => t.symbol === 'EDU')?.balance.toLocaleString() || 0} EDU</span></div>
            </div>
            <div class="mt-8">
                <h3 class="text-xl font-semibold mb-3 text-gray-700">Recent NFT Mints (School-Initiated)</h3>
                <ul id="recentMintsLog" class="list-disc list-inside text-sm text-slate-600 space-y-1.5 max-h-48 overflow-y-auto p-3 bg-slate-50 rounded-md border">
                    ${school.cardanoWallet.recentMints.length > 0 ? school.cardanoWallet.recentMints.map(m => `<li>${m.type} for ${m.studentName} - ${m.date} (Tx: ${m.txId.substring(0, 10)}...)</li>`).join('') : '<li>No recent school-initiated mints.</li>'}
                </ul>
            </div>
            <div class="mt-8">
                <h3 class="text-xl font-semibold mb-3 text-gray-700">Treasury Actions (Marlowe Simulated)</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button class="btn btn-outline text-sm" onclick="showToast('Mock: Initiating fund allocation via Marlowe contract...', 'info')"><i class="fas fa-landmark mr-2"></i>Allocate Department Funds</button>
                    <button class="btn btn-outline text-sm" onclick="showToast('Mock: Fetching transaction history from Cardano...', 'info')"><i class="fas fa-history mr-2"></i>View On-Chain Treasury</button>
                </div>
            </div>
        </div>`;
};

/**
 * Renders the Parent Dashboard content.
 * @returns {string} The HTML string for the Parent Dashboard.
 */
const renderParentDashboard = () => {
    const child = AppState.mockData.students[0]; // For demo, always show the first student
    return `
        <div class="card p-6 md:p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-5 brand-text">My Child's Progress: ${child.name}</h2>
            <div class="mb-6 p-4 bg-slate-50 rounded-lg border"><p class="text-lg"><strong>Class:</strong> ${child.class}</p><p class="text-lg"><strong>EduCoins:</strong> ${child.eduCoins} <i class="fas fa-coins text-yellow-400"></i></p></div>
            <h3 class="text-xl font-semibold mb-3 text-gray-700">Recent Achievements:</h3>
            <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6 pl-4">${child.academicTimeline.slice(-3).map(item => `<li>${item.event} (${item.year}) ${item.txId ? `<a href="#" onclick="showToast('Mock: Verifying on chain: ${item.txId}','info')" class="text-xs text-sky-500 ml-1">(Verify)</a>` : ''}</li>`).join('')} ${child.academicTimeline.length === 0 ? '<li>No achievements.</li>' : ''}</ul>
            <div class="mt-6"><h3 class="text-xl font-semibold mb-3 text-gray-700">NFT Certificates:</h3>${child.nftCertificates.length > 0 ? child.nftCertificates.map(cert => `<div class="nft-card p-4 rounded-lg shadow-sm mb-3 flex items-center space-x-4"><img src="${cert.imageUrl}" alt="${cert.name}" class="w-24 h-16 object-cover rounded-md border" onerror="this.src='https://placehold.co/96x64/eeeeee/999999?text=Error&font=inter'"><div><h4 class="font-medium text-sky-700 text-md">${cert.name}</h4><p class="text-xs text-slate-500">Issued: ${cert.issueDate}</p></div><button class="ml-auto btn btn-primary px-3 py-1 text-xs" onclick="showNftExplorer('${child.id}', '${cert.id}')">Details</button></div>`).join('') : '<p class="text-slate-500 text-sm py-3 text-center">No NFT certificates.</p>'}</div>
            <div class="mt-4"><button class="btn btn-outline w-full" onclick="showPublicVerificationModal('${child.id}')"><i class="fas fa-search-plus mr-2"></i>View Child's Public Record</button></div>
            <p class="mt-8 text-sm text-slate-500 text-center">(Parent portal simplified for demo.)</p>
        </div>`;
};

/**
 * Renders the Library page content.
 * @returns {string} The HTML string for the Library page.
 */
const renderLibraryPage = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 class="text-2xl font-semibold text-gray-700 whitespace-nowrap">School Library</h2>
                <div class="w-full sm:w-auto flex gap-2">
                    <input type="text" id="librarySearch" class="input-field flex-grow sm:w-64" placeholder="Search books by title, author...">
                    <button class="btn btn-primary whitespace-nowrap" onclick="filterLibraryBooks()"><i class="fas fa-search mr-2"></i>Search</button>
                </div>
            </div>
            <div id="libraryBookGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            </div>
        </div>`;
};

/**
 * Renders the list of library books, optionally filtered by a search term.
 */
const renderLibraryBooks = () => {
    const grid = document.getElementById('libraryBookGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const searchTerm = document.getElementById('librarySearch')?.value.toLowerCase() || '';

    const filteredBooks = AppState.mockData.libraryBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.subject.toLowerCase().includes(searchTerm)
    );

    if (filteredBooks.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-slate-500 py-8">No books found matching your search.</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    filteredBooks.forEach(book => {
        const availabilityClass = book.availableCopies > 0 ? 'text-green-600' : 'text-red-600';
        const availabilityText = book.availableCopies > 0 ? `${book.availableCopies} Available` : 'Checked Out';
        const buttonDisabled = book.availableCopies === 0 ? 'opacity-50 cursor-not-allowed' : '';

        const bookCard = document.createElement('div');
        bookCard.className = `card flex flex-col rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl`;
        bookCard.innerHTML = `
            <img src="${book.coverUrl}" alt="${book.title}" class="w-full h-48 object-cover" onerror="this.src='https://placehold.co/100x150/cccccc/999999?text=No+Image&font=inter'">
            <div class="p-4 flex flex-col flex-grow">
                <h3 class="text-lg font-semibold text-gray-800 mb-1 truncate" title="${book.title}">${book.title}</h3>
                <p class="text-xs text-slate-500 mb-1">By: ${book.author}</p>
                <p class="text-xs text-slate-500 mb-2">Subject: ${book.subject}</p>
                <p class="text-sm font-medium ${availabilityClass} mb-3">${availabilityText}</p>
                <button class="btn btn-primary text-sm w-full mt-auto ${buttonDisabled}" ${book.availableCopies === 0 ? 'disabled' : ''} onclick="requestBook(this, '${book.id}', '${book.title.replace(/'/g, "\\'")}')">
                    <span class="btn-spinner"></span><span class="btn-text"><i class="fas fa-book-medical mr-2"></i>Request Book</span>
                </button>
            </div>
        `;
        fragment.appendChild(bookCard);
    });
    grid.appendChild(fragment);
};

/**
 * Simulates requesting a book from the library.
 * @param {HTMLButtonElement} button - The button element that triggered the request.
 * @param {string} bookId - The ID of the book to request.
 * @param {string} bookTitle - The title of the book.
 */
const requestBook = (button, bookId, bookTitle) => {
    button.classList.add('loading');
    button.disabled = true;
    showToast(`Simulating request for '${bookTitle}'...`, 'info');
    setTimeout(() => {
        const book = AppState.mockData.libraryBooks.find(b => b.id === bookId);
        if (book && book.availableCopies > 0) {
            book.availableCopies--; // Simulate one copy being taken
            showToast(`Mock: You have successfully borrowed '${bookTitle}'. Please return by [Date].`, 'success');
        } else {
            showToast(`Mock: '${bookTitle}' is currently unavailable.`, 'error');
        }
        button.classList.remove('loading');
        // Re-render the library to update availability status
        renderLibraryBooks();
    }, 1500);
};

/**
 * Triggers a re-render of the library books based on the current search term.
 */
const filterLibraryBooks = () => {
    renderLibraryBooks();
};

/**
 * Renders the Events page content.
 * @returns {string} The HTML string for the Events page.
 */
const renderEventsPage = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
                <h2 class="text-2xl font-semibold text-gray-700">Upcoming School Events</h2>
                ${AppState.currentUser.role === 'admin' ? '<button class="btn btn-primary" onclick="showCreateEventModal()"><i class="fas fa-plus mr-2"></i>Create Event</button>' : ''}
            </div>
            <div id="eventsList" class="space-y-5">
            </div>
        </div>`;
};

/**
 * Renders the list of school events.
 */
const renderSchoolEvents = () => {
    const list = document.getElementById('eventsList');
    if (!list) return;
    list.innerHTML = '';

    if (AppState.mockData.schoolEvents.length === 0) {
        list.innerHTML = `<p class="text-center text-slate-500 py-8">No upcoming events scheduled.</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    AppState.mockData.schoolEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        const eventCard = document.createElement('div');
        eventCard.className = `card flex flex-col sm:flex-row items-start p-5 rounded-lg gap-4 hover:shadow-lg transition-shadow`;
        eventCard.innerHTML = `
            <div class="flex-shrink-0 w-16 h-16 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center text-2xl">
                <i class="fas ${event.icon || 'fa-calendar-check'}"></i>
            </div>
            <div class="flex-grow">
                <span class="text-xs font-semibold uppercase tracking-wider ${event.type === 'Sports' ? 'text-orange-500' : event.type === 'Academic' ? 'text-purple-500' : 'text-green-500'}">${event.type}</span>
                <h3 class="text-xl font-semibold text-gray-800 mt-1 mb-1.5">${event.title}</h3>
                <p class="text-sm text-slate-600 mb-1"><i class="fas fa-calendar-alt mr-1.5 text-slate-400"></i>${formattedDate}</p>
                <p class="text-sm text-slate-500 leading-relaxed">${event.description}</p>
            </div>
            <button class="btn btn-secondary text-sm mt-3 sm:mt-0 sm:ml-auto self-start sm:self-center whitespace-nowrap" onclick="showToast('Mock: RSVP for \'${event.title.replace(/'/g, "\\'")}\' recorded.', 'info')">
                <i class="fas fa-check-circle mr-2"></i>RSVP / Details
            </button>
        `;
        fragment.appendChild(eventCard);
    });
    list.appendChild(fragment);
};

/**
 * Renders the Attendance page content.
 * @returns {string} The HTML string for the Attendance page.
 */
const renderAttendancePage = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 class="text-2xl font-semibold text-gray-700">Class Attendance</h2>
                <div class="flex items-center gap-2">
                    <label for="attendanceClassSelect" class="text-sm font-medium text-gray-700">Select Class:</label>
                    <select id="attendanceClassSelect" class="input-field" onchange="renderAttendanceTable()">
                        ${['Grade 5A', 'Grade 5B', 'Grade 6A', 'Grade 6B'].map(cls => `<option value="${cls}">${cls}</option>`).join('')}
                    </select>
                </div>
            </div>
            <div class="overflow-x-auto glassmorphism rounded-lg p-0.5">
                <table class="min-w-full text-sm data-table">
                    <thead><tr><th>Student ID</th><th>Student Name</th><th>Status</th><th>Actions</th></tr></thead>
                    <tbody id="attendanceTableBody">
                    </tbody>
                </table>
            </div>
            <div class="mt-6 text-right">
                <button id="saveAttendanceBtn" class="btn btn-primary" onclick="saveAttendance(this)"><span class="btn-spinner"></span><span class="btn-text"><i class="fas fa-save mr-2"></i>Save Attendance</span></button>
            </div>
        </div>`;
};

/**
 * Renders the attendance table for the selected class.
 */
const renderAttendanceTable = () => {
    const tbody = document.getElementById('attendanceTableBody');
    const classSelect = document.getElementById('attendanceClassSelect');
    if (!tbody || !classSelect) return;
    const selectedClass = classSelect.value;
    const records = AppState.mockData.attendanceRecords[selectedClass] || [];
    tbody.innerHTML = '';
    if (records.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center text-slate-500 py-8">No students in this class or attendance not taken.</td></tr>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.studentId}</td>
            <td>${record.studentName}</td>
            <td>
                <select class="input-field text-sm p-1.5" data-student-id="${record.studentId}">
                    <option value="Present" ${record.status === 'Present' ? 'selected' : ''}>Present</option>
                    <option value="Absent" ${record.status === 'Absent' ? 'selected' : ''}>Absent</option>
                    <option value="Late" ${record.status === 'Late' ? 'selected' : ''}>Late</option>
                    <option value="Excused" ${record.status === 'Excused' ? 'selected' : ''}>Excused</option>
                </select>
            </td>
            <td>
                <button class="btn text-xs p-1.5 bg-sky-100 text-sky-600 hover:bg-sky-200" onclick="showAddAttendanceNoteModal('${record.studentName}')">
                    <i class="fas fa-sticky-note mr-1"></i>Add Note
                </button>
            </td>
        `;
        fragment.appendChild(row);
    });
    tbody.appendChild(fragment);
};

/**
 * Simulates saving attendance records.
 * @param {HTMLButtonElement} button - The button element that triggered the save.
 */
const saveAttendance = (button) => {
    button.classList.add('loading');
    button.disabled = true;
    showToast('Simulating saving attendance records...', 'info');
    setTimeout(() => {
        const attendanceSelects = document.querySelectorAll('#attendanceTableBody select');
        attendanceSelects.forEach(select => {
            const studentId = select.dataset.studentId;
            const newStatus = select.value;
            const classSelected = document.getElementById('attendanceClassSelect')?.value;
            const record = AppState.mockData.attendanceRecords[classSelected]?.find(r => r.studentId === studentId);
            if (record) {
                record.status = newStatus;
                // Simulate awarding coins for perfect attendance (if monthly logic existed)
                const student = AppState.mockData.students.find(s => s.id === studentId);
                if (student && AppState.mockData.rewardCriteria.find(c => c.id === 'crit008' && c.autoTrigger)) {
                    const perfectAttendanceCoins = AppState.mockData.rewardCriteria.find(c => c.id === 'crit008')?.coins || 0;
                    // For demo, just show a potential reward toast
                    if (Math.random() > 0.8) { // 20% chance to mock perfect attendance bonus
                        student.eduCoins += perfectAttendanceCoins;
                        student.academicTimeline.push({ year: new Date().getFullYear(), event: 'Perfect Monthly Attendance (Mock)', type: 'award', tokens: perfectAttendanceCoins, txId: `tx_att_perfect_${studentId}_${Date.now()}`, date: new Date().toISOString().split('T')[0] });
                        showToast(`${student.name} awarded ${perfectAttendanceCoins} EduCoins for perfect attendance!`, 'success');
                    }
                }
            }
        });
        showToast('Attendance records saved successfully!', 'success');
        button.classList.remove('loading');
        button.disabled = false;
        renderAttendanceTable(); // Re-render to reflect any changes/notes
    }, 1500);
};

/**
 * Displays a modal for adding an attendance note.
 * @param {string} studentName - The name of the student.
 */
const showAddAttendanceNoteModal = (studentName) => {
    const body = `
        <p class="text-sm text-slate-600 mb-4">Add a note for ${studentName}'s attendance record.</p>
        <textarea id="attendanceNote" class="input-field w-full" rows="4" placeholder="e.g., Sick leave, family event, late due to traffic."></textarea>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('attendanceNoteModal')">Cancel</button>
        <button class="btn btn-primary" onclick="addAttendanceNote('${studentName}')">Save Note</button>`;
    showModal('attendanceNoteModal', 'Add Attendance Note', body, footer);
};

/**
 * Simulates adding an attendance note.
 * @param {string} studentName - The name of the student.
 */
const addAttendanceNote = (studentName) => {
    const note = document.getElementById('attendanceNote')?.value.trim();
    if (note) {
        showToast(`Note for ${studentName} added: "${note}"`, 'info');
        closeModal('attendanceNoteModal');
    } else {
        showToast('Please enter a note.', 'error');
    }
};

/**
 * Renders the Homework page content.
 * @returns {string} The HTML string for the Homework page.
 */
const renderHomeworkPage = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
                <h2 class="text-2xl font-semibold text-gray-700">Homework Assignments</h2>
                ${AppState.currentUser.role === 'teacher' || AppState.currentUser.role === 'admin' ? '<button class="btn btn-primary" onclick="showAssignHomeworkModal()"><i class="fas fa-plus mr-2"></i>Assign New</button>' : ''}
            </div>
            <div id="homeworkList" class="space-y-4">
            </div>
        </div>`;
};

/**
 * Renders the list of homework assignments.
 */
const renderHomeworkList = () => {
    const homeworkListDiv = document.getElementById('homeworkList');
    if (!homeworkListDiv) return;
    homeworkListDiv.innerHTML = '';

    const assignments = AppState.mockData.homeworkAssignments;
    if (assignments.length === 0) {
        homeworkListDiv.innerHTML = `<p class="text-center text-slate-500 py-8">No homework assignments found.</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    assignments.forEach(hw => {
        let statusColor = 'text-yellow-600 bg-yellow-100';
        if (hw.status.toLowerCase().includes('submitted')) statusColor = 'text-blue-600 bg-blue-100';
        if (hw.status.toLowerCase().includes('graded')) statusColor = 'text-green-600 bg-green-100';
        if (hw.status.toLowerCase().includes('overdue')) statusColor = 'text-red-600 bg-red-100';

        const homeworkCard = document.createElement('div');
        homeworkCard.className = `card p-5 rounded-lg hover:shadow-lg transition-shadow`;
        homeworkCard.innerHTML = `
            <div class="flex flex-col sm:flex-row justify-between items-start gap-3">
                <div>
                    <h3 class="text-lg font-semibold text-sky-700">${hw.title}</h3>
                    <p class="text-sm text-slate-500">Subject: ${hw.subject} | Due: ${hw.dueDate}</p>
                    <p class="text-sm text-slate-600 mt-1">Assigned to: ${hw.assignedTo}</p>
                </div>
                <span class="text-xs font-medium px-2.5 py-1 rounded-full ${statusColor}">${hw.status}</span>
            </div>
            <p class="text-sm text-slate-700 mt-3 mb-3">${hw.details}</p>
            <div class="text-right space-x-2">
                ${(AppState.currentUser.role === 'student' && hw.status === 'Pending Submission') ? '<button class="btn btn-primary text-sm" onclick="showSubmitHomeworkModal(\'' + hw.id + '\')"><i class="fas fa-upload mr-2"></i>Submit</button>' : ''}
                ${(AppState.currentUser.role === 'teacher' && (hw.status === 'Submitted' || hw.status.includes('Graded'))) ? '<button class="btn btn-secondary text-sm" onclick="showGradeHomeworkModal(\'' + hw.id + '\')"><i class="fas fa-marker mr-2"></i>Grade/View</button>' : ''}
                <button class="btn btn-outline text-sm"><i class="fas fa-eye mr-2"></i>View Details</button>
            </div>
        `;
        fragment.appendChild(homeworkCard);
    });
    homeworkListDiv.appendChild(fragment);
};

/**
 * Displays a modal for submitting homework.
 * @param {string} homeworkId - The ID of the homework assignment.
 */
const showSubmitHomeworkModal = (homeworkId) => {
    const hw = AppState.mockData.homeworkAssignments.find(h => h.id === homeworkId);
    if (!hw) {
        showToast('Homework not found.', 'error');
        return;
    }
    const body = `
        <p class="text-sm text-slate-600 mb-4">Submit your work for: <strong>${hw.title}</strong></p>
        <label for="submissionLink" class="block text-sm font-medium text-gray-700 mb-1">Submission Link (IPFS / URL):</label>
        <input type="text" id="submissionLink" class="input-field w-full" placeholder="e.g., ipfs://QmYourWorkHash or https://link.to/your.pdf">
        <p class="text-xs text-slate-500 mt-2"><strong>Note:</strong> IPFS links ensure verifiable, decentralized storage of your submission.</p>
        <div class="info-box-blockchain mt-4">
            <i class="fas fa-network-wired mr-2"></i><strong>On-Chain Proof:</strong> A record of your submission (with a mock transaction ID) would be logged on Cardano, proving timely submission.
        </div>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('submitHomeworkModal')">Cancel</button>
        <button class="btn btn-primary" onclick="submitHomework('${homeworkId}')">Submit Homework</button>`;
    showModal('submitHomeworkModal', 'Submit Homework', body, footer);
};

/**
 * Simulates submitting homework.
 * @param {string} homeworkId - The ID of the homework assignment.
 */
const submitHomework = (homeworkId) => {
    const submissionLink = document.getElementById('submissionLink')?.value.trim();
    if (!submissionLink) {
        showToast('Please provide a submission link.', 'error');
        return;
    }
    const hw = AppState.mockData.homeworkAssignments.find(h => h.id === homeworkId);
    if (hw) {
        hw.status = 'Submitted';
        hw.submissionLink = submissionLink;
        hw.submissionTx = `tx_hw_sub_${hw.id}_${Date.now()}`; // Mock transaction ID
        showToast(`Homework "${hw.title}" submitted! Mock Tx: ${hw.submissionTx.substring(0, 12)}...`, 'success');

        // Simulate EduCoin award for on-time submission
        const student = AppState.mockData.students.find(s => s.id === AppState.currentUser.studentId);
        if (student && AppState.mockData.rewardCriteria.find(c => c.id === 'crit002' && c.autoTrigger)) {
            const coins = AppState.mockData.rewardCriteria.find(c => c.id === 'crit002')?.coins || 0;
            student.eduCoins += coins;
            student.academicTimeline.push({
                year: new Date().getFullYear(),
                event: `Homework Submitted: "${hw.title}"`,
                type: 'activity',
                tokens: coins,
                details: `Link: ${submissionLink.substring(0, 20)}...`,
                txId: hw.submissionTx,
                date: new Date().toISOString().split('T')[0]
            });
            showToast(`${student.name} earned ${coins} EduCoins for submitting homework!`, 'info');
        }

        closeModal('submitHomeworkModal');
        renderMainContent(); // Re-render the page to update status
    } else {
        showToast('Homework not found.', 'error');
    }
};

/**
 * Displays a modal for grading homework.
 * @param {string} homeworkId - The ID of the homework assignment.
 */
const showGradeHomeworkModal = (homeworkId) => {
    const hw = AppState.mockData.homeworkAssignments.find(h => h.id === homeworkId);
    if (!hw) {
        showToast('Homework not found.', 'error');
        return;
    }
    const body = `
        <p class="text-sm text-slate-600 mb-4">Grade for: <strong>${hw.title}</strong> (Assigned to: ${hw.assignedTo})</p>
        ${hw.submissionLink ? `<p class="mb-2 text-xs text-slate-500">Submission: <a href="${hw.submissionLink}" target="_blank" class="text-sky-500 hover:underline">${hw.submissionLink.substring(0, 40)}...</a></p>` : '<p class="mb-2 text-xs text-slate-500">No submission link.</p>'}
        <label for="gradeInput" class="block text-sm font-medium text-gray-700 mb-1">Grade:</label>
        <input type="text" id="gradeInput" class="input-field w-full mb-3" placeholder="e.g., A+, 85%, Excellent">
        <label for="feedbackTextarea" class="block text-sm font-medium text-gray-700 mb-1">Feedback:</label>
        <textarea id="feedbackTextarea" class="input-field w-full" rows="4" placeholder="Provide feedback here..."></textarea>
        <label for="awardCoinsInput" class="block text-sm font-medium text-gray-700 mt-3 mb-1">Award EduCoins:</label>
        <input type="number" id="awardCoinsInput" class="input-field w-full" value="${hw.coinsOnCompletion}" min="0">
        <p class="text-xs text-slate-500 mt-2">EduCoins will be awarded to the student upon grading.</p>
        `;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('gradeHomeworkModal')">Cancel</button>
        <button class="btn btn-primary" onclick="gradeHomework('${homeworkId}')">Save Grade</button>`;
    showModal('gradeHomeworkModal', 'Grade Homework', body, footer);
};

/**
 * Simulates grading homework and awarding EduCoins.
 * @param {string} homeworkId - The ID of the homework assignment.
 */
const gradeHomework = (homeworkId) => {
    const hw = AppState.mockData.homeworkAssignments.find(h => h.id === homeworkId);
    const gradeInput = document.getElementById('gradeInput');
    const feedbackTextarea = document.getElementById('feedbackTextarea');
    const awardCoinsInput = document.getElementById('awardCoinsInput');

    const grade = gradeInput?.value.trim();
    const feedback = feedbackTextarea?.value.trim();
    const awardedCoins = parseInt(awardCoinsInput?.value);

    if (!hw || !grade) {
        showToast('Please enter a grade.', 'error');
        return;
    }
    if (isNaN(awardedCoins) || awardedCoins < 0) {
        showToast('Invalid coin amount.', 'error');
        return;
    }

    hw.status = `Graded (${grade})`;
    hw.grade = grade;
    hw.feedback = feedback;
    hw.gradeTx = `tx_hw_grade_${hw.id}_${Date.now()}`; // Mock transaction ID

    // Find the student and award EduCoins
    // This heuristic is simplified; a real app would link student to assignment directly
    const student = AppState.mockData.students.find(s => s.class === hw.assignedTo && s.academicTimeline.some(item => item.event.includes(hw.title)));
    if (student) {
        student.eduCoins += awardedCoins;
        student.academicTimeline.push({
            year: new Date().getFullYear(),
            event: `Graded: "${hw.title}" (Grade: ${grade})`,
            type: 'academic',
            tokens: awardedCoins,
            details: `Feedback: ${feedback?.substring(0, 50)}...`,
            txId: hw.gradeTx,
            date: new Date().toISOString().split('T')[0]
        });
        showToast(`${student.name} awarded ${awardedCoins} EduCoins for "${hw.title}"!`, 'success');
    } else {
        showToast(`Homework "${hw.title}" graded. Student not found to award coins.`, 'info');
    }

    closeModal('gradeHomeworkModal');
    renderMainContent(); // Re-render the page
};

/**
 * Displays a modal for assigning new homework.
 */
const showAssignHomeworkModal = () => {
    const body = `
        <form id="assignHomeworkForm" class="space-y-4">
            <div>
                <label for="hwTitle" class="block text-sm font-medium text-gray-700 mb-1">Title:</label>
                <input type="text" id="hwTitle" class="input-field w-full" placeholder="e.g., Math Problem Set 5">
            </div>
            <div>
                <label for="hwSubject" class="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                <input type="text" id="hwSubject" class="input-field w-full" placeholder="e.g., Mathematics">
            </div>
            <div>
                <label for="hwDueDate" class="block text-sm font-medium text-gray-700 mb-1">Due Date:</label>
                <input type="date" id="hwDueDate" class="input-field w-full">
            </div>
            <div>
                <label for="hwAssignedTo" class="block text-sm font-medium text-gray-700 mb-1">Assigned To Class:</label>
                <select id="hwAssignedTo" class="input-field w-full">
                    ${['Grade 5A', 'Grade 5B', 'Grade 6A', 'Grade 6B', 'All'].map(cls => `<option value="${cls}">${cls}</option>`).join('')}
                </select>
            </div>
            <div>
                <label for="hwDetails" class="block text-sm font-medium text-gray-700 mb-1">Details:</label>
                <textarea id="hwDetails" class="input-field w-full" rows="3" placeholder="Instructions for the homework..."></textarea>
            </div>
            <div>
                <label for="hwCoins" class="block text-sm font-medium text-gray-700 mb-1">EduCoins on Completion:</label>
                <input type="number" id="hwCoins" class="input-field w-full" value="10" min="0">
            </div>
        </form>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('assignHomeworkModal')">Cancel</button>
        <button class="btn btn-primary" onclick="assignHomework()">Assign Homework</button>`;
    showModal('assignHomeworkModal', 'Assign New Homework', body, footer);
};

/**
 * Simulates assigning a new homework assignment.
 */
const assignHomework = () => {
    const hwTitle = document.getElementById('hwTitle');
    const hwSubject = document.getElementById('hwSubject');
    const hwDueDate = document.getElementById('hwDueDate');
    const hwAssignedTo = document.getElementById('hwAssignedTo');
    const hwDetails = document.getElementById('hwDetails');
    const hwCoins = document.getElementById('hwCoins');

    const title = hwTitle?.value.trim();
    const subject = hwSubject?.value.trim();
    const dueDate = hwDueDate?.value;
    const assignedTo = hwAssignedTo?.value;
    const details = hwDetails?.value.trim();
    const coins = parseInt(hwCoins?.value);

    if (!title || !subject || !dueDate || !assignedTo || !details || isNaN(coins)) {
        showToast('Please fill all fields and ensure coins is a number.', 'error');
        return;
    }

    const newId = `hw${Date.now().toString().slice(-6)}`;
    AppState.mockData.homeworkAssignments.unshift({
        id: newId,
        title,
        subject,
        dueDate,
        assignedTo,
        status: 'Pending Submission',
        details,
        submissionType: 'Any',
        coinsOnCompletion: coins
    });
    showToast('Homework assigned successfully!', 'success');
    closeModal('assignHomeworkModal');
    renderMainContent(); // Re-render the page
};

/**
 * Renders the Academic Timetable page content.
 * @returns {string} The HTML string for the Academic Timetable page.
 */
const renderAcademicTimetablePage = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <h2 class="text-2xl font-semibold text-gray-700 mb-6">Weekly Timetable</h2>
            <div class="overflow-x-auto glassmorphism rounded-lg p-0.5">
                <table class="min-w-full text-sm data-table text-center">
                    <thead class="bg-slate-100">
                        <tr>
                            <th class="p-3">Time</th>
                            <th class="p-3">Monday</th>
                            <th class="p-3">Tuesday</th>
                            <th class="p-3">Wednesday</th>
                            <th class="p-3">Thursday</th>
                            <th class="p-3">Friday</th>
                        </tr>
                    </thead>
                    <tbody id="timetableBody">
                    </tbody>
                </table>
            </div>
        </div>`;
};

/**
 * Renders the academic timetable for the current user's class/role.
 */
const renderAcademicTimetable = () => {
    const timetableBody = document.getElementById('timetableBody');
    if (!timetableBody) return;
    timetableBody.innerHTML = '';
    const timeSlots = ['09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 01:00', '02:00 - 03:00'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const userClass = AppState.currentUser.role === 'student' ? (AppState.mockData.students.find(s => s.id === AppState.currentUser.studentId) || {}).class : null;

    const fragment = document.createDocumentFragment();
    timeSlots.forEach(slot => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-200';
        let rowHtml = `<td class="p-3 font-medium text-slate-600 bg-slate-50">${slot}</td>`;
        days.forEach(day => {
            const entry = AppState.mockData.timetable[day]?.find(e => e.time === slot && (AppState.currentUser.role !== 'student' || e.class === userClass));
            if (entry) {
                rowHtml += `
                    <td class="p-3 border-l border-slate-200">
                        <div class="font-semibold text-sky-700">${entry.subject}</div>
                        <div class="text-xs text-slate-500">${entry.teacher}</div>
                        ${AppState.currentUser.role !== 'student' ? `<div class="text-xs text-purple-600">${entry.class}</div>` : ''}
                    </td>`;
            } else {
                rowHtml += `<td class="p-3 border-l border-slate-200 text-slate-400 text-xs">-</td>`;
            }
        });
        row.innerHTML = rowHtml;
        fragment.appendChild(row);
    });
    timetableBody.appendChild(fragment);

    if (timetableBody.innerHTML === '') {
        timetableBody.innerHTML = `<tr><td colspan="${days.length + 1}" class="text-center text-slate-500 py-8">Timetable not available for your class or role.</td></tr>`;
    }
};

/**
 * Renders the Messaging page content.
 * @returns {string} The HTML string for the Messaging page.
 */
const renderMessagingPage = () => {
    // Event delegation for message list items and folder buttons
    const handleMessageClick = (event) => {
        const messageListItem = event.target.closest('.message-list-item');
        if (messageListItem) {
            AppState.selectedMessageId = messageListItem.dataset.messageId;
            AppState.currentMessageView = 'read';
            renderMainContent();
        }
    };

    const handleMessageViewChange = (event) => {
        const button = event.target.closest('[data-message-view]');
        if (button) {
            AppState.currentMessageView = button.dataset.messageView;
            AppState.selectedMessageId = null;
            renderMainContent();
        }
    };

    // Remove old listeners before re-attaching to prevent duplicates
    document.getElementById('mainContent')?.removeEventListener('click', handleMessageClick);
    document.getElementById('mainContent')?.removeEventListener('click', handleMessageViewChange);

    // Re-attach listeners after content is rendered
    setTimeout(() => {
        document.getElementById('mainContent')?.addEventListener('click', handleMessageClick);
        document.getElementById('mainContent')?.addEventListener('click', handleMessageViewChange);

        const composeBtn = document.getElementById('composeNewMessageBtn');
        if (composeBtn) {
            composeBtn.onclick = () => { // Use onclick for direct assignment to avoid multiple listeners
                AppState.currentMessageView = 'compose';
                AppState.selectedMessageId = null;
                renderMainContent();
            };
        }

        const composeForm = document.getElementById('composeMessageForm');
        if (composeForm) {
            composeForm.onsubmit = handleSendMessage; // Use onsubmit for direct assignment
        }
    }, 0);

    let messagingContent = `
        <div class="card p-0 rounded-lg no-hover-effect overflow-hidden messaging-grid">
            <div class="bg-slate-50 border-r border-slate-200 p-4 space-y-2">
                <button id="composeNewMessageBtn" class="btn btn-primary w-full mb-4"><i class="fas fa-edit mr-2"></i>Compose</button>
                <button data-message-view="inbox" class="w-full text-left p-2 rounded-md hover:bg-slate-200 ${AppState.currentMessageView === 'inbox' ? 'bg-sky-100 text-sky-700 font-semibold' : 'text-slate-600'}">
                    <i class="fas fa-inbox fa-fw mr-2"></i>Inbox
                    <span class="text-xs bg-sky-500 text-white rounded-full px-1.5 py-0.5 ml-1">
                        ${AppState.mockData.messages.filter(m => m.type === 'inbox' && !m.read).length}
                    </span>
                </button>
                <button data-message-view="sent" class="w-full text-left p-2 rounded-md hover:bg-slate-200 ${AppState.currentMessageView === 'sent' ? 'bg-sky-100 text-sky-700 font-semibold' : 'text-slate-600'}">
                    <i class="fas fa-paper-plane fa-fw mr-2"></i>Sent
                </button>
                <button data-message-view="drafts" class="w-full text-left p-2 rounded-md hover:bg-slate-200 ${AppState.currentMessageView === 'drafts' ? 'bg-sky-100 text-sky-700 font-semibold' : 'text-slate-600'}">
                    <i class="fas fa-file-alt fa-fw mr-2"></i>Drafts
                </button>
                <button data-message-view="trash" class="w-full text-left p-2 rounded-md hover:bg-slate-200 ${AppState.currentMessageView === 'trash' ? 'bg-sky-100 text-sky-700 font-semibold' : 'text-slate-600'}">
                    <i class="fas fa-trash fa-fw mr-2"></i>Trash
                </button>
            </div>

            <div class="p-6 overflow-y-auto">`;

    if (AppState.currentMessageView === 'compose' || (AppState.currentMessageView === 'reply' && AppState.selectedMessageId)) {
        const replyingToMessage = AppState.currentMessageView === 'reply' ? AppState.mockData.messages.find(m => m.id === AppState.selectedMessageId) : null;
        messagingContent += `
            <h3 class="text-xl font-semibold mb-4">${replyingToMessage ? 'Reply to: ' + replyingToMessage.subject : 'Compose New Message'}</h3>
            <form id="composeMessageForm" class="space-y-4">
                <div>
                    <label for="msgRecipient" class="block text-sm font-medium text-gray-700 mb-1">Recipient:</label>
                    <input type="text" id="msgRecipient" class="input-field w-full" value="${replyingToMessage ? replyingToMessage.sender : ''}" placeholder="Enter recipient's username or email">
                </div>
                <div>
                    <label for="msgSubject" class="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                    <input type="text" id="msgSubject" class="input-field w-full" value="${replyingToMessage ? 'Re: ' + replyingToMessage.subject : ''}" placeholder="Enter subject">
                </div>
                <div>
                    <label for="msgBody" class="block text-sm font-medium text-gray-700 mb-1">Message:</label>
                    <textarea id="msgBody" class="input-field w-full" rows="8" placeholder="Type your message here..."></textarea>
                </div>
                <div class="text-right">
                    <button type="button" class="btn btn-outline mr-2" onclick="AppState.currentMessageView='inbox'; AppState.selectedMessageId=null; renderMainContent();">Cancel</button>
                    <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane mr-2"></i>Send Message</button>
                </div>
            </form>
        `;
    } else if (AppState.currentMessageView === 'read' && AppState.selectedMessageId) {
        const message = AppState.mockData.messages.find(m => m.id === AppState.selectedMessageId);
        if (message) {
            // Mark as read (simulation)
            if (!message.read && message.type === 'inbox') message.read = true;
            messagingContent += `
                <div class="mb-4">
                    <button class="btn btn-outline text-sm" onclick="AppState.currentMessageView='inbox'; AppState.selectedMessageId=null; renderMainContent();"><i class="fas fa-arrow-left mr-2"></i>Back to Inbox</button>
                </div>
                <h3 class="text-2xl font-semibold mb-1">${message.subject}</h3>
                <p class="text-sm text-slate-500 mb-1">From: ${message.sender} ${message.type === 'sent' ? `(To: ${message.recipient || 'N/A'})` : ''}</p>
                <p class="text-sm text-slate-500 mb-4">Date: ${new Date(message.date).toLocaleString()}</p>
                <div class="prose max-w-none p-4 bg-slate-50 rounded-md border">
                    ${message.body.replace(/\n/g, '<br>')}
                </div>
                <div class="mt-6 space-x-2">
                    <button class="btn btn-primary text-sm" onclick="AppState.currentMessageView='reply'; renderMainContent();"><i class="fas fa-reply mr-2"></i>Reply</button>
                    <button class="btn btn-outline text-sm"><i class="fas fa-share mr-2"></i>Forward</button>
                    <button class="btn btn-danger-outline text-sm"><i class="fas fa-trash mr-2"></i>Delete</button>
                </div>
            `;
        } else {
            messagingContent += '<p>Message not found.</p>';
        }
    } else { // List view (inbox, sent, etc.)
        const messagesToShow = AppState.mockData.messages.filter(m => m.type === AppState.currentMessageView);
        if (messagesToShow.length > 0) {
            messagingContent += messagesToShow.map(msg => `
                <div data-message-id="${msg.id}" class="message-list-item p-4 border-b border-slate-200 hover:bg-slate-100 cursor-pointer ${!msg.read && msg.type === 'inbox' ? 'font-semibold border-l-4 border-sky-500' : ''}">
                    <div class="flex justify-between items-center">
                        <span class="text-slate-800">${msg.type === 'sent' ? `To: ${msg.recipient || 'N/A'}` : msg.sender}</span>
                        <span class="text-xs text-slate-500">${new Date(msg.date).toLocaleDateString()}</span>
                    </div>
                    <p class="text-slate-700 truncate">${msg.subject}</p>
                    <p class="text-xs text-slate-500 truncate">${msg.body.substring(0, 50)}...</p>
                </div>
            `).join('');
        } else {
            messagingContent += `<p class="text-center text-slate-500 py-10">No messages in ${AppState.currentMessageView}.</p>`;
        }
    }

    messagingContent += `</div></div>`; // Close main message area and grid
    return messagingContent;
};

/**
 * Handles sending a new message or a reply.
 * @param {Event} event - The form submission event.
 */
const handleSendMessage = (event) => {
    event.preventDefault();
    const recipient = document.getElementById('msgRecipient')?.value.trim();
    const subject = document.getElementById('msgSubject')?.value.trim();
    const body = document.getElementById('msgBody')?.value.trim();

    if (!recipient || !subject || !body) {
        showToast('All fields are required to send a message.', 'error');
        return;
    }

    // Simulate sending message
    const newMessage = {
        id: `msg${Date.now()}`,
        senderId: AppState.currentUser.id || AppState.currentUser.username,
        sender: AppState.currentUser.username,
        recipient: recipient,
        recipientId: recipient, // In a real app, map this to an actual user ID
        subject: subject,
        body: body,
        date: new Date().toISOString(),
        read: true, // Sent messages are 'read' by sender
        type: 'sent'
    };

    AppState.mockData.messages.unshift(newMessage); // Add to sent messages
    showToast('Message sent successfully!', 'success');
    AppState.currentMessageView = 'sent'; // Go back to sent folder
    renderMainContent();
};

/**
 * Renders the Academic Subjects page content.
 * @returns {string} The HTML string for the Academic Subjects page.
 */
const renderAcademicSubjectsPage = () => {
    let subjectContent = `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">`;
    if (AppState.currentUser.role === 'admin' || AppState.currentUser.role === 'teacher') {
        subjectContent += `<div class="flex justify-between items-center mb-6">
                                <h2 class="text-2xl font-semibold text-gray-700">Academic Subjects</h2>
                                <button class="btn btn-primary" onclick="showAddSubjectModal()"><i class="fas fa-plus mr-2"></i>Add Subject</button>
                            </div>`;
    }

    subjectContent += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;
    AppState.mockData.academicSubjects.forEach(subject => {
        subjectContent += `
            <div class="card p-5 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 class="text-xl font-semibold text-sky-700 mb-2">${subject.name}</h3>
                <p class="text-sm text-slate-600 mb-1"><strong>Department:</strong> ${subject.department}</p>
                <p class="text-sm text-slate-600 mb-3"><strong>Head Teacher:</strong> ${subject.headTeacher}</p>
                <p class="text-xs text-slate-500 leading-relaxed mb-4">${subject.description}</p>
                ${subject.curriculumLink ? `<p class="text-xs mb-3"><a href="${subject.curriculumLink}" target="_blank" class="text-sky-500 hover:underline">View Curriculum (IPFS Mock) <i class="fas fa-external-link-alt fa-xs"></i></a></p>` : ''}
                <div class="text-right">
                    <button class="btn btn-outline text-sm"><i class="fas fa-info-circle mr-2"></i>View Details</button>
                </div>
            </div>
        `;
    });
    subjectContent += `</div></div>`;
    return subjectContent;
};

/**
 * Displays a modal for adding a new academic subject.
 */
const showAddSubjectModal = () => {
    const body = `
        <form id="addSubjectForm" class="space-y-4">
            <div>
                <label for="subjectName" class="block text-sm font-medium text-gray-700 mb-1">Subject Name:</label>
                <input type="text" id="subjectName" class="input-field w-full" placeholder="e.g., Computer Science">
            </div>
            <div>
                <label for="subjectDept" class="block text-sm font-medium text-gray-700 mb-1">Department:</label>
                <input type="text" id="subjectDept" class="input-field w-full" placeholder="e.g., Technology">
            </div>
            <div>
                <label for="subjectHead" class="block text-sm font-medium text-gray-700 mb-1">Head Teacher:</label>
                <input type="text" id="subjectHead" class="input-field w-full" placeholder="e.g., Mr. David Adewale">
            </div>
            <div>
                <label for="subjectDesc" class="block text-sm font-medium text-gray-700 mb-1">Description:</label>
                <textarea id="subjectDesc" class="input-field w-full" rows="3" placeholder="Brief description of the subject..."></textarea>
            </div>
        </form>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('addSubjectModal')">Cancel</button>
        <button class="btn btn-primary" onclick="addSubject()">Add Subject</button>`;
    showModal('addSubjectModal', 'Add New Academic Subject', body, footer);
};

/**
 * Simulates adding a new academic subject.
 */
const addSubject = () => {
    const subjectName = document.getElementById('subjectName');
    const subjectDept = document.getElementById('subjectDept');
    const subjectHead = document.getElementById('subjectHead');
    const subjectDesc = document.getElementById('subjectDesc');

    const name = subjectName?.value.trim();
    const department = subjectDept?.value.trim();
    const headTeacher = subjectHead?.value.trim();
    const description = subjectDesc?.value.trim();

    if (!name || !department || !headTeacher || !description) {
        showToast('Please fill all fields.', 'error');
        return;
    }

    const newId = `sub${Date.now().toString().slice(-5)}`;
    AppState.mockData.academicSubjects.push({
        id: newId,
        name,
        department,
        headTeacher,
        description,
        curriculumLink: `ipfs://Qm${Math.random().toString(36).substring(2, 10)}` // Mock IPFS link
    });
    showToast('Subject added successfully!', 'success');
    closeModal('addSubjectModal');
    renderMainContent();
};

/**
 * Renders the Admin Governance page content.
 * @returns {string} The HTML string for the Admin Governance page.
 */
const renderAdminGovernancePage = () => {
    let governanceContent = `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold text-gray-700">Governance Proposals</h2>
                <button class="btn btn-primary" onclick="showCreateProposalModal()"><i class="fas fa-plus mr-2"></i>New Proposal</button>
            </div>
            <div class="info-box-blockchain mb-6">
                <strong>Decentralized Governance:</strong> Proposals and voting can be managed on the Cardano blockchain for ultimate transparency and immutability. Each vote is a transaction, ensuring integrity.
            </div>
            <div id="governanceProposalsList" class="space-y-5">`;
    AppState.mockData.governanceProposals.forEach(proposal => {
        const canVote = proposal.status.startsWith('Open for Voting') && !proposal.voters.includes(AppState.currentUser.id || AppState.currentUser.username);
        governanceContent += `
            <div class="card p-5 rounded-lg border border-slate-200 shadow-sm">
                <div class="flex justify-between items-start">
                    <h3 class="text-xl font-semibold text-sky-700 mb-1">${proposal.title}</h3>
                    <span class="text-xs font-medium px-2 py-1 rounded-full ${proposal.status.startsWith('Open') ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}">${proposal.status}</span>
                </div>
                <p class="text-xs text-slate-500 mb-1">Submitted by: ${proposal.submittedBy}</p>
                <p class="text-xs text-slate-500 mb-2">Date: ${proposal.date}</p>
                <p class="text-sm text-slate-600 mb-3">${proposal.description}</p>
                ${proposal.discourseLink ? `<p class="text-xs mb-3"><a href="${proposal.discourseLink}" target="_blank" class="text-sky-500 hover:underline">View Discussion (IPFS Mock) <i class="fas fa-external-link-alt fa-xs"></i></a></p>` : ''}
                <div class="flex justify-between items-center text-sm mb-3">
                    <span><i class="fas fa-thumbs-up text-green-500 mr-1"></i> ${proposal.votesFor.toLocaleString()} For</span>
                    <span><i class="fas fa-thumbs-down text-red-500 mr-1"></i> ${proposal.votesAgainst.toLocaleString()} Against</span>
                </div>
                ${proposal.status.startsWith('Open for Voting') ? `
                <div class="flex space-x-2">
                    <button class="btn btn-success text-sm flex-1" ${!canVote ? 'disabled' : ''} onclick="castVote('${proposal.id}', 'for', this)"><span class="btn-spinner"></span><span class="btn-text"><i class="fas fa-vote-yea mr-2"></i>Vote For</span></button>
                    <button class="btn btn-danger-outline text-sm flex-1" ${!canVote ? 'disabled' : ''} onclick="castVote('${proposal.id}', 'against', this)"><span class="btn-spinner"></span><span class="btn-text"><i class="fas fa-times mr-2"></i>Vote Against</span></button>
                </div>
                ${!canVote && (proposal.voters.includes(AppState.currentUser.id || AppState.currentUser.username)) ? '<p class="text-xs text-green-600 mt-2 text-center">You have voted on this proposal.</p>' : ''}
                ` : `<p class="text-xs text-green-700 font-semibold mt-2 text-center">Result Tx (Mock): <span class="tx-id">${proposal.resultTx || 'N/A'}</span></p>`}
                ${proposal.status.startsWith('Open') && (proposal.requiredQuorum || proposal.threshold) ? `<p class="text-xs text-slate-400 mt-2">Quorum: ${proposal.requiredQuorum || 'N/A'} | Threshold: ${proposal.threshold || 'N/A'}</p>` : ''}
            </div>
        `;
    });

    governanceContent += `</div></div>`;
    return governanceContent;
};

/**
 * Displays a modal for creating a new governance proposal.
 */
const showCreateProposalModal = () => {
    const body = `
        <form id="createProposalForm" class="space-y-4">
            <div>
                <label for="proposalTitle" class="block text-sm font-medium text-gray-700 mb-1">Proposal Title:</label>
                <input type="text" id="proposalTitle" class="input-field w-full" placeholder="e.g., New School Playground">
            </div>
            <div>
                <label for="proposalDesc" class="block text-sm font-medium text-gray-700 mb-1">Description:</label>
                <textarea id="proposalDesc" class="input-field w-full" rows="4" placeholder="Detailed explanation of the proposal..."></textarea>
            </div>
            <div>
                <label for="proposalQuorum" class="block text-sm font-medium text-gray-700 mb-1">Required Quorum (Min Votes):</label>
                <input type="number" id="proposalQuorum" class="input-field w-full" value="20" min="0">
            </div>
            <div>
                <label for="proposalThreshold" class="block text-sm font-medium text-gray-700 mb-1">Approval Threshold (%):</label>
                <input type="text" id="proposalThreshold" class="input-field w-full" value="51%">
            </div>
            <div class="info-box-blockchain mt-4">
                <i class="fas fa-vote-yea mr-2"></i><strong>On-Chain Record:</strong> Creating this proposal would (simulate) minting a governance NFT or recording the proposal hash on Cardano, ensuring transparency.
            </div>
        </form>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('createProposalModal')">Cancel</button>
        <button class="btn btn-primary" onclick="createProposal()">Create Proposal</button>`;
    showModal('createProposalModal', 'Create New Governance Proposal', body, footer);
};

/**
 * Simulates creating a new governance proposal.
 */
const createProposal = () => {
    const proposalTitle = document.getElementById('proposalTitle');
    const proposalDesc = document.getElementById('proposalDesc');
    const proposalQuorum = document.getElementById('proposalQuorum');
    const proposalThreshold = document.getElementById('proposalThreshold');

    const title = proposalTitle?.value.trim();
    const description = proposalDesc?.value.trim();
    const quorum = parseInt(proposalQuorum?.value);
    const threshold = proposalThreshold?.value.trim();

    if (!title || !description || isNaN(quorum) || quorum < 0 || !threshold) {
        showToast('Please fill all fields correctly.', 'error');
        return;
    }

    const newId = `gov${Date.now().toString().slice(-6)}`;
    AppState.mockData.governanceProposals.unshift({
        id: newId,
        title,
        submittedBy: `${AppState.currentUser.username} (DID: ${AppState.currentUser.did.substring(0, 20)}...)`,
        date: new Date().toISOString().split('T')[0],
        status: 'Open for Voting (Ends ' + new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + ')', // 7 days from now
        description,
        votesFor: 0,
        votesAgainst: 0,
        voters: [], // Track voters by ID
        requiredQuorum: quorum,
        threshold: threshold,
        discourseLink: `ipfs://Qm${Math.random().toString(36).substring(2, 12)}`
    });
    showToast('Proposal created successfully and opened for voting!', 'success');
    closeModal('createProposalModal');
    renderMainContent();
};

/**
 * Simulates casting a vote on a governance proposal.
 * @param {string} proposalId - The ID of the proposal.
 * @param {'for'|'against'} voteType - The type of vote ('for' or 'against').
 * @param {HTMLButtonElement} button - The button element that triggered the vote.
 */
const castVote = (proposalId, voteType, button) => {
    button.classList.add('loading');
    button.disabled = true;
    showToast(`Casting vote for proposal ${proposalId}...`, 'info');

    setTimeout(() => {
        const proposal = AppState.mockData.governanceProposals.find(p => p.id === proposalId);
        if (proposal) {
            const currentUserId = AppState.currentUser.id || AppState.currentUser.username;
            if (!proposal.voters.includes(currentUserId)) {
                if (voteType === 'for') {
                    proposal.votesFor++;
                } else {
                    proposal.votesAgainst++;
                }
                proposal.voters.push(currentUserId);
                showToast(`Your vote for "${proposal.title}" (${voteType}) has been cast and recorded on-chain (mock).`, 'success');
            } else {
                showToast('You have already voted on this proposal.', 'error');
            }
        } else {
            showToast('Proposal not found.', 'error');
        }
        renderMainContent(); // Re-render to update vote counts and disable buttons
    }, 1500);
};

/**
 * Renders the Student Accounting page content.
 * @returns {string} The HTML string for the Student Accounting page.
 */
const renderStudentAccountingPage = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold text-gray-700">Student Fees & Payments</h2>
                <span class="cardano-tag marlowe"><i class="fas fa-cogs"></i>Marlowe Powered</span>
            </div>
            <div class="info-box-blockchain mb-6">
                <strong>Transparent & Automated Payments:</strong> Student fee payments can be managed via Marlowe smart contracts on Cardano. This allows for automated reminders, secure payment processing, and transparent, auditable financial records for both the school and parents.
            </div>
            <div class="mb-6">
                <label for="studentFeeSelect" class="block text-sm font-medium text-gray-700 mb-1">Select Student:</label>
                <select id="studentFeeSelect" class="input-field w-full max-w-xs" onchange="renderStudentFeeDetails(this.value)">
                    ${AppState.mockData.students.map(s => `<option value="${s.id}">${s.name} (${s.id})</option>`).join('')}
                </select>
            </div>
            <div id="studentFeeDetailsContainer">
            </div>
        </div>`;
};

/**
 * Renders the fee details for a selected student.
 * @param {string} studentId - The ID of the student.
 */
const renderStudentFeeDetails = (studentId) => {
    const container = document.getElementById('studentFeeDetailsContainer');
    if (!container) return;
    const student = AppState.mockData.students.find(s => s.id === studentId);
    if (!student) {
        container.innerHTML = `<p class="text-center text-slate-500 py-8">Student not found.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="card p-5 rounded-lg border-2 border-sky-100 bg-sky-50 shadow-sm mb-6">
            <h3 class="text-xl font-semibold text-sky-700 mb-3">Fee Overview for ${student.name}</h3>
            <div class="grid grid-cols-2 gap-4 text-sm font-medium">
                <div>Total Due: <span class="text-lg font-bold text-gray-800">$${student.fees.totalDue.toLocaleString()}</span></div>
                <div>Paid: <span class="text-lg font-bold text-green-600">$${student.fees.paid.toLocaleString()}</span></div>
                <div>Balance: <span class="text-lg font-bold ${student.fees.balance > 0 ? 'text-red-600' : 'text-green-600'}">$${student.fees.balance.toLocaleString()}</span></div>
                <div>Payment Plan: <span class="text-gray-700">${student.fees.paymentPlan}</span></div>
                <div class="col-span-2">Next Due Date: <span class="text-gray-700">${student.fees.nextDueDate}</span></div>
            </div>
            ${student.fees.balance > 0 ? `
            <button class="btn btn-primary mt-6 w-full" onclick="showMakePaymentModal('${student.id}')">
                <i class="fas fa-credit-card mr-2"></i>Make Payment (Marlowe)
            </button>` : `<p class="text-center text-green-600 font-semibold mt-4"><i class="fas fa-check-circle mr-2"></i>All fees paid!</p>`}
        </div>

        <div class="card p-5 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-700 mb-3">Payment History (On-Chain)</h3>
            ${student.fees.paymentHistory.length > 0 ? `
            <div class="overflow-x-auto glassmorphism rounded-lg p-0.5">
                <table class="min-w-full text-sm data-table">
                    <thead><tr><th>Date</th><th>Amount</th><th>Method</th><th>Status</th><th>TxID</th></tr></thead>
                    <tbody>
                        ${student.fees.paymentHistory.map(p => `
                            <tr>
                                <td>${p.date}</td>
                                <td>$${p.amount.toLocaleString()}</td>
                                <td>${p.method}</td>
                                <td><span class="px-2 py-0.5 text-xs font-medium rounded-full ${p.status === 'Confirmed' || p.status.includes('Released') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}">${p.status}</span></td>
                                <td><a href="https://mock.cardanoscan.io/transaction/${p.txId}" target="_blank" class="tx-id hover:bg-slate-200">${p.txId.substring(0, 10)}...</a></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>` : `<p class="text-center text-slate-500 py-4">No payment history recorded.</p>`}
        </div>
    `;
};

/**
 * Displays a modal for making a fee payment.
 * @param {string} studentId - The ID of the student for whom to make a payment.
 */
const showMakePaymentModal = (studentId) => {
    const student = AppState.mockData.students.find(s => s.id === studentId);
    if (!student) {
        showToast('Student not found.', 'error');
        return;
    }
    const body = `
        <p class="text-sm text-slate-600 mb-4">You are making a payment for <strong>${student.name}</strong>.</p>
        <div class="mb-4">
            <label for="paymentAmount" class="block text-sm font-medium text-gray-700 mb-1">Amount to Pay:</label>
            <input type="number" id="paymentAmount" class="input-field w-full" value="${student.fees.balance}" min="1">
        </div>
        <div class="info-box-blockchain mt-4">
            <i class="fas fa-handshake mr-2"></i><strong>Marlowe Escrow Simulation:</strong> In a real scenario, this payment would be sent to a Marlowe smart contract, held in escrow, and released upon fulfillment of terms (e.g., school marks fee as paid).
        </div>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('makePaymentModal')">Cancel</button>
        <button class="btn btn-primary" onclick="processPayment('${student.id}')">Process Payment (Mock)</button>`;
    showModal('makePaymentModal', 'Make Fee Payment', body, footer);
};

/**
 * Simulates processing a fee payment via a Marlowe contract.
 * @param {string} studentId - The ID of the student.
 */
const processPayment = (studentId) => {
    const paymentAmountInput = document.getElementById('paymentAmount');
    const paymentAmount = parseInt(paymentAmountInput?.value);
    const student = AppState.mockData.students.find(s => s.id === studentId);

    if (!student || isNaN(paymentAmount) || paymentAmount <= 0) {
        showToast('Invalid payment amount or student data.', 'error');
        return;
    }
    if (paymentAmount > student.fees.balance) {
        showToast('Payment amount exceeds balance due.', 'error');
        return;
    }

    showToast('Simulating payment via Marlowe contract...', 'info');
    setTimeout(() => {
        student.fees.paid += paymentAmount;
        student.fees.balance -= paymentAmount;
        const newTxId = `tx_fee_${student.id}_${Date.now()}`;
        student.fees.paymentHistory.push({
            date: new Date().toISOString().split('T')[0],
            amount: paymentAmount,
            method: 'Cardano (ADA via Marlowe Contract)',
            txId: newTxId,
            status: 'Confirmed & Released'
        });
        if (student.fees.balance <= 0) {
            student.fees.nextDueDate = 'N/A (Paid in Full)';
        }
        showToast(`Payment of $${paymentAmount.toLocaleString()} processed for ${student.name}! Tx: ${newTxId.substring(0, 12)}...`, 'success');
        closeModal('makePaymentModal');
        renderStudentFeeDetails(studentId); // Re-render details to show updated balance
    }, 2000);
};

/**
 * Renders the Office Accounting page content.
 * @returns {string} The HTML string for the Office Accounting page.
 */
const renderOfficeAccountingPage = () => {
    const schoolFinances = AppState.mockData.school.officeFinances;
    return `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold text-gray-700">Office Accounting</h2>
                <span class="cardano-tag"><i class="fas fa-landmark"></i>Cardano Treasury (Simulated)</span>
            </div>
            <div class="info-box-blockchain mb-6">
                <strong>Transparent Treasury Management:</strong> School operational funds could be managed in a Cardano wallet or through smart contracts for enhanced transparency in spending and fund allocation.
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="card p-5 rounded-lg border">
                    <h3 class="text-lg font-semibold text-green-600 mb-3"><i class="fas fa-arrow-down mr-2"></i>Income</h3>
                    <ul class="space-y-2 text-sm">
                        ${schoolFinances.income.map(item => `
                            <li class="flex justify-between items-center border-b pb-1">
                                <span>${item.source} (${item.date})</span>
                                <span class="font-medium">$${item.amount.toLocaleString()}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <p class="text-right font-bold mt-2">Total Income: $${schoolFinances.income.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}</p>
                </div>
                <div class="card p-5 rounded-lg border">
                    <h3 class="text-lg font-semibold text-red-600 mb-3"><i class="fas fa-arrow-up mr-2"></i>Expenses</h3>
                    <ul class="space-y-2 text-sm">
                        ${schoolFinances.expenses.map(item => `
                            <li class="flex justify-between items-center border-b pb-1">
                                <span>${item.item} (${item.date})</span>
                                <span class="font-medium">$${item.amount.toLocaleString()}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <p class="text-right font-bold mt-2">Total Expenses: $${schoolFinances.expenses.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}</p>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-semibold text-gray-700 mb-4">Budget Allocation & Spending</h3>
                <div class="overflow-x-auto glassmorphism rounded-lg p-0.5">
                    <table class="min-w-full text-sm data-table">
                        <thead><tr><th>Department</th><th>Allocated</th><th>Spent</th><th>Remaining</th><th>Status</th></tr></thead>
                        <tbody>
                            ${schoolFinances.budget.map(item => `
                                <tr>
                                    <td>${item.department}</td>
                                    <td>$${item.allocated.toLocaleString()}</td>
                                    <td>$${item.spent.toLocaleString()}</td>
                                    <td>$${(item.allocated - item.spent).toLocaleString()}</td>
                                    <td><span class="px-2 py-0.5 text-xs rounded-full ${item.spent > item.allocated ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}">${item.spent > item.allocated ? 'Over Budget' : 'On Track'}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="mt-6 text-right">
                    <button class="btn btn-primary" onclick="showToast('Mock: Generating detailed financial report...', 'info')"><i class="fas fa-file-invoice-dollar mr-2"></i>Generate Financial Report</button>
                </div>
            </div>
        </div>`;
};

/**
 * Renders the Gamification page content, adapting for student, teacher, or admin roles.
 * @returns {string} The HTML string for the Gamification page.
 */
const renderGamificationPage = () => {
    const user = AppState.currentUser;
    let gamificationHTML = `<div class="space-y-8">`;

    // Page Title based on Role
    if (user.role === 'admin' || AppState.currentPage === 'gamificationSettings') {
        gamificationHTML += `<h1 class="text-3xl font-bold brand-text">Gamification & Rewards Settings</h1>`;
    } else if (user.role === 'teacher') {
        gamificationHTML += `<h1 class="text-3xl font-bold brand-text">Student Rewards & Gamification Overview</h1>`;
    } else { // Student
        gamificationHTML += `<h1 class="text-3xl font-bold brand-text">My Rewards & Progress</h1>`;
    }

    // --- Admin View: Manage Reward Criteria ---
    if (user.role === 'admin' || AppState.currentPage === 'gamificationSettings') {
        gamificationHTML += `
            <div class="card p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Reward Criteria</h2>
                    <button class="btn btn-primary btn-sm" onclick="showAddRewardCriteriaModal()">
                        <i class="fas fa-plus mr-2"></i>Add New Criterion
                    </button>
                </div>
                <div class="overflow-x-auto">
                    <table class="min-w-full data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Coins</th>
                                <th>Auto-Trigger</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${AppState.mockData.rewardCriteria.map(criterion => `
                                <tr>
                                    <td>${criterion.name}</td>
                                    <td><span class="px-2 py-1 text-xs font-medium rounded-full ${criterion.type === 'Academic' ? 'bg-blue-100 text-blue-700' : criterion.type === 'Engagement' ? 'bg-yellow-100 text-yellow-700' : criterion.type === 'Reading' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}">${criterion.type}</span></td>
                                    <td class="text-center">${criterion.coins || criterion.coinsPer100Pages + ' /100pgs'}</td>
                                    <td class="text-center">${criterion.autoTrigger ? '<i class="fas fa-check-circle text-green-500"></i>' : '<i class="fas fa-times-circle text-red-500"></i>'}</td>
                                    <td class="text-xs">${criterion.description}</td>
                                    <td><button class="btn btn-outline btn-xs" onclick="showToast('Mock: Edit ${criterion.name}')"><i class="fas fa-edit"></i></button></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
    }

    // --- Student View: My Progress, Timeline to Next Achievement, Leaderboard ---
    if (user.role === 'student') {
        const student = AppState.mockData.students.find(s => s.id === user.studentId) || AppState.mockData.students[0];
        gamificationHTML += `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card p-6">
                    <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">My EduCoin Balance</h2>
                    <p class="text-5xl font-bold brand-text-orange mb-4">${student.eduCoins} <i class="fas fa-coins text-yellow-400"></i></p>
                    <button class="btn btn-secondary btn-sm" onclick="navigateTo('schoolStore')"><i class="fas fa-store mr-2"></i>Visit School Store</button>
                </div>
                <div class="card p-6">
                    <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">Next Achievement Milestones</h2>
                    <ul class="space-y-2 text-sm">
                        ${getUpcomingMilestones(student).map(m => `
                            <li class="p-2 rounded-md bg-slate-100 dark:bg-slate-700/50">
                                <span class="font-medium text-sky-600 dark:text-sky-400">${m.name}</span> - ${m.coins} Coins
                                <div class="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5 mt-1">
                                    <div class="bg-sky-500 h-2.5 rounded-full" style="width: ${m.progress}%"></div>
                                </div>
                                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${m.progress}% complete</p>
                            </li>
                        `).join('') || '<li class="text-slate-500">No upcoming milestones defined.</li>'}
                    </ul>
                </div>
            </div>

            <div class="card p-6">
                <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">My Recent Rewards & Activities</h2>
                <div class="max-h-80 overflow-y-auto space-y-3">
                    ${[...student.academicTimeline.map(item => ({ ...item, date: item.date || item.year + '-01-01' })), // Add date to academicTimeline for sorting
                    ...student.readingLogs.map(item => ({ ...item, event: `Read: ${AppState.mockData.libraryBooks.find(b => b.id === item.bookId)?.title || 'Book'}`, details: `${item.pagesRead} pages`, type: 'reading', date: item.dateCompleted })),
                    ...student.participation.map(item => ({ ...item, event: item.activity, details: `Points: ${item.points}`, type: 'participation' }))
                    ]
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .slice(0, 10) // Show recent 10
                        .map(item => `
                        <div class="p-3 rounded-md bg-white dark:bg-slate-700/50 shadow-sm border-l-4 ${item.type === 'award' || item.coinsEarned > 0 ? 'border-green-500' : item.type === 'milestone' ? 'border-sky-500' : 'border-slate-300'}">
                            <div class="flex justify-between items-center">
                                <span class="font-medium text-slate-700 dark:text-slate-200">${item.event}</span>
                                <span class="text-xs text-slate-500 dark:text-slate-400">${new Date(item.date).toLocaleDateString()}</span>
                            </div>
                            ${item.details ? `<p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${item.details}</p>` : ''}
                            ${item.coinsEarned || item.tokens ? `<p class="text-xs font-semibold text-green-600 dark:text-green-400 mt-1">+${item.coinsEarned || item.tokens} EduCoins</p>` : ''}
                        </div>
                    `).join('') || '<p class="text-slate-500">No recent activities.</p>'}
                </div>
            </div>
        `;
    }

    // --- Leaderboard (Visible to Student, Teacher, Admin) ---
    gamificationHTML += `
        <div class="card p-6">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">School Leaderboard (Top Students by EduCoins)</h2>
            <ol class="list-decimal list-inside space-y-3">
                ${AppState.mockData.leaderboard.map((entry, index) => `
                    <li class="p-3 rounded-md ${index < 3 ? 'bg-yellow-50 dark:bg-yellow-500/10' : 'bg-slate-50 dark:bg-slate-700/40'} flex justify-between items-center">
                        <div>
                            <span class="font-semibold ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-slate-500' : index === 2 ? 'text-orange-700' : 'text-slate-700 dark:text-slate-200'}">${index + 1}. ${entry.name}</span>
                            ${entry.studentId === AppState.currentUser?.studentId ? '<span class="ml-2 text-xs px-1.5 py-0.5 bg-sky-500 text-white rounded-full">You</span>' : ''}
                        </div>
                        <span class="font-bold text-orange-500 dark:text-orange-400">${entry.eduCoins} <i class="fas fa-coins"></i></span>
                    </li>
                `).join('')}
            </ol>
        </div>
    `;
    gamificationHTML += `</div>`; // Close main space-y-8 div
    return gamificationHTML;
};

/**
 * Helper function for gamification page to get upcoming milestones.
 * @param {object} student - The student object.
 * @returns {Array<object>} An array of upcoming milestones with progress.
 */
const getUpcomingMilestones = (student) => {
    // This is a mock. A real version would calculate progress towards defined criteria.
    const milestones = [
        { name: 'Read 5 Library Books', coins: 50, current: student.readingLogs?.length || 0, target: 5 },
        { name: 'Achieve 95% Attendance This Term', coins: 100, current: 92, target: 95 }, // Mock current attendance
        { name: 'Submit 10 Homeworks On Time', coins: 75, current: AppState.mockData.homeworkAssignments.filter(h => h.assignedTo === student.class && h.status !== 'Pending Submission').length, target: 10 }
    ];
    return milestones.map(m => ({ ...m, progress: Math.min(100, (m.current / m.target) * 100).toFixed(0) })).filter(m => m.progress < 100);
};

/**
 * Renders the School Store page content.
 * @returns {string} The HTML string for the School Store page.
 */
const renderSchoolStorePage = () => {
    let storeContent = `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">School Store</h2>
                <span class="cardano-tag"><i class="fas fa-shopping-cart mr-2"></i>EduCoins Accepted</span>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 mb-6">Welcome to the school store! Use your earned EduCoins or ADA to purchase items. (All transactions are simulated)</p>
            <div id="schoolStoreGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">`;
    AppState.mockData.schoolStoreItems.forEach(item => {
        storeContent += `
            <div class="card nft-card flex flex-col rounded-lg overflow-hidden">
                <img src="${item.imageUrl}" alt="${item.name}" class="w-full h-40 object-cover" onerror="this.src='https://placehold.co/150x150/cccccc/999999?text=No+Image&font=inter'">
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="text-md font-semibold text-sky-700 dark:text-sky-300 mb-1 truncate" title="${item.name}">${item.name}</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mb-2">Stock: ${item.stock}</p>
                    <div class="mt-auto">
                        <p class="text-sm font-bold brand-text-orange mb-1">${item.priceEduCoins} <i class="fas fa-coins text-yellow-400"></i></p>
                        ${item.priceADA > 0 ? `<p class="text-xs text-slate-500 dark:text-slate-400 mb-2">or ${item.priceADA} ADA (mock)</p>` : ''}
                        <button class="btn btn-primary btn-sm w-full text-xs mt-1" onclick="showToast('Mock: Adding ${item.name.replace(/'/g, "\\'")} to cart. Tx: tx_store_purchase_${item.id}', 'info')">
                            <i class="fas fa-cart-plus mr-1.5"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>`;
    });

    storeContent += `</div></div>`;
    return storeContent;
};

/**
 * Renders the Teacher Professional Development page content.
 * @returns {string} The HTML string for the Teacher Professional Development page.
 */
const renderTeacherProfessionalDevelopmentPage = () => {
    let pdContent = `
        <div class="card p-6 md:p-8 rounded-lg no-hover-effect">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">Professional Development</h2>
                <span class="cardano-tag"><i class="fas fa-chalkboard-teacher mr-2"></i>Teacher Tokens (TDF)</span>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 mb-6">Enhance your skills with these courses. Use your Teacher Development Fund (TDF) tokens to enroll. Successful completion awards a verifiable NFT certificate. (All transactions are simulated)</p>
            <div class="space-y-5">`;
    AppState.mockData.professionalDevelopmentCourses.forEach(course => {
        pdContent += `
            <div class="card nft-card p-5 rounded-lg">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h3 class="text-lg font-semibold text-sky-700 dark:text-sky-300 mb-1">${course.title}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">Provider: ${course.provider} | Duration: ${course.duration}</p>
                        <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 mb-3">${course.description}</p>
                    </div>
                    <div class="text-left md:text-right mt-3 md:mt-0 md:ml-4 flex-shrink-0">
                        <p class="text-md font-bold brand-text-secondary mb-2">${course.costTDF} TDF</p>
                        <button class="btn btn-success btn-sm text-xs" onclick="showToast('Mock: Enrolling in ${course.title.replace(/'/g, "\\'")}. Tx: tx_pd_enroll_${course.id}', 'success')">
                            <i class="fas fa-award mr-1.5"></i>Enroll & Earn NFT Cert
                        </button>
                    </div>
                </div>
                <p class="text-xs text-slate-400 dark:text-slate-500 mt-2">Certificate Policy ID (Mock): <span class="tx-id">${course.certificateNFT}</span></p>
            </div>`;
    });

    pdContent += `</div></div>`;
    return pdContent;
};

/**
 * Renders the Teacher Students management page.
 * @returns {string} The HTML string for the Teacher Students page.
 */
const renderTeacherStudentsPage = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-6 brand-text">Manage Student Performance</h2>
            ${AppState.mockData.students.map(student => `
                <div class="mb-6 p-5 border rounded-lg bg-white shadow hover:shadow-lg transition-shadow">
                    <h3 class="font-semibold text-xl text-sky-700 mb-2">${student.name} - ${student.class}</h3>
                    <p class="text-sm text-slate-500 mb-3">EduCoins: ${student.eduCoins}</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="grade-${student.id}" class="block text-sm font-medium text-gray-700 mb-1">Grade/Comment:</label>
                            <input type="text" id="grade-${student.id}" class="input-field w-full shadow-sm" placeholder="e.g., Math A+">
                        </div>
                        <div>
                            <label for="tokens-${student.id}" class="block text-sm font-medium text-gray-700 mb-1">Award EduCoins:</label>
                            <input type="number" id="tokens-${student.id}" class="input-field w-full shadow-sm" value="50" min="0">
                        </div>
                    </div>
                    <button class="btn btn-primary mt-4 text-sm" onclick="awardStudentTokens('${student.id}')"><i class="fas fa-check-circle mr-1.5"></i>Submit & Award</button>
                </div>`).join('')}
        </div>`;
};

/**
 * Renders the Admin Students management page.
 * @returns {string} The HTML string for the Admin Students page.
 */
const renderAdminStudentsPage = () => {
    return `
        <div class="card p-6 md:p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-5 brand-text">Student Details Management</h2>
            <button class="btn btn-primary mb-6 text-base" onclick="showAddStudentForm()"><i class="fas fa-user-plus mr-2"></i>Add New Student</button>
            <div class="overflow-x-auto glassmorphism rounded-lg p-0.5">
                <table class="min-w-full text-sm data-table">
                    <thead><tr><th>ID</th><th>Name</th><th>Class</th><th>EduCoins</th><th>Actions</th></tr></thead>
                    <tbody>
                        ${AppState.mockData.students.map(s => `<tr><td>${s.id}</td><td>${s.name}</td><td>${s.class}</td><td>${s.eduCoins}</td><td class="space-x-1 whitespace-nowrap"><button class="btn text-sky-600 hover:text-sky-700 text-xs p-1.5 bg-sky-100 hover:bg-sky-200" onclick="viewStudentDetails('${s.id}')"><i class="fas fa-eye mr-1"></i> View</button><button class="btn text-orange-600 hover:text-orange-700 text-xs p-1.5 bg-orange-100 hover:bg-orange-200" onclick="showToast('Edit ${s.name} (mock)', 'info')"><i class="fas fa-edit mr-1"></i> Edit</button></td></tr>`).join('')}
                        ${AppState.mockData.students.length === 0 ? '<tr><td colspan="5" class="text-center text-slate-500 py-6">No students found.</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        </div>`;
};

// --- CHART INITIALIZATION ---
/**
 * Initializes or updates the Chart.js instances for the Admin Dashboard.
 */
const initializeAdminCharts = () => {
    const school = AppState.mockData.school;

    // Set global Chart.js defaults based on current theme
    Chart.defaults.font.family = 'Inter';
    Chart.defaults.color = AppState.theme === 'dark' ? '#9ca3af' : '#64748b';
    Chart.defaults.borderColor = AppState.theme === 'dark' ? 'rgba(75, 85, 99, 0.4)' : 'rgba(203,213,225,0.2)';

    // Destroy existing chart instances to prevent duplicates and memory leaks
    if (enrollmentChartInstance) enrollmentChartInstance.destroy();
    if (credentialTypeChartInstance) credentialTypeChartInstance.destroy();
    if (financialChartInstance) financialChartInstance.destroy();

    // Enrollment Chart (Bar Chart)
    const enrollmentCtx = document.getElementById('adminEnrollmentChart')?.getContext('2d');
    if (enrollmentCtx) {
        enrollmentChartInstance = new Chart(enrollmentCtx, {
            type: 'bar',
            data: {
                labels: ['T1', 'T2', 'T3', 'Now'],
                datasets: [{
                    label: 'Enrollment',
                    data: [school.totalStudents - 100, school.totalStudents - 50, school.totalStudents - 20, school.totalStudents],
                    backgroundColor: 'rgba(249, 115, 22, 0.6)',
                    borderColor: 'rgba(234, 88, 12, 1)',
                    borderWidth: 1.5,
                    borderRadius: 4,
                    barThickness: 'flex',
                    maxBarThickness: 40
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: Chart.defaults.borderColor }, ticks: { font: { size: 10 }, color: Chart.defaults.color } },
                    x: { grid: { display: false }, ticks: { font: { size: 10 }, color: Chart.defaults.color } }
                }
            }
        });
    }

    // Credential Type Chart (Doughnut Chart)
    const credentialTypeCtx = document.getElementById('adminCredentialTypeChart')?.getContext('2d');
    if (credentialTypeCtx) {
        credentialTypeChartInstance = new Chart(credentialTypeCtx, {
            type: 'doughnut',
            data: {
                labels: ['Diplomas', 'Certificates', 'Badges'],
                datasets: [{
                    data: [Math.floor(school.credentialsIssued * 0.4), Math.floor(school.credentialsIssued * 0.35), Math.floor(school.credentialsIssued * 0.25)],
                    backgroundColor: ['rgba(249, 115, 22, 0.85)', 'rgba(102, 126, 234, 0.85)', 'rgba(118, 75, 162, 0.85)'],
                    borderColor: ['#FFFFFF'],
                    borderWidth: 2,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    legend: { display: true, position: 'bottom', labels: { boxWidth: 12, padding: 15, font: { size: 10 }, color: Chart.defaults.color } }
                }
            }
        });
    }

    // Financial Chart (Line Chart)
    const financialCtx = document.getElementById('adminFinancialChart')?.getContext('2d');
    if (financialCtx) {
        financialChartInstance = new Chart(financialCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                    {
                        label: 'Fees Collected ($)',
                        data: [25000, 30000, 28000, 35000, school.feesCollected - 118000],
                        borderColor: 'rgba(249, 115, 22, 1)',
                        backgroundColor: 'rgba(249, 115, 22, 0.15)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: 'rgba(249,115,22,1)',
                        pointBorderColor: '#fff',
                        pointHoverRadius: 7,
                        pointRadius: 5,
                        pointHoverBorderWidth: 2
                    },
                    {
                        label: 'Funds Allocated ($)',
                        data: [22000, 28000, 25000, 32000, school.fundsAllocated - 107000],
                        borderColor: 'rgba(102, 126, 234, 1)',
                        backgroundColor: 'rgba(102, 126, 234, 0.15)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: 'rgba(102,126,234,1)',
                        pointBorderColor: '#fff',
                        pointHoverRadius: 7,
                        pointRadius: 5,
                        pointHoverBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: true, position: 'top', labels: { boxWidth: 12, padding: 10, font: { size: 10 }, color: Chart.defaults.color } }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: Chart.defaults.borderColor }, ticks: { font: { size: 10 }, color: Chart.defaults.color } },
                    x: { grid: { display: false }, ticks: { font: { size: 10 }, color: Chart.defaults.color } }
                }
            }
        });
    }
};

// --- MOBILE NAVIGATION & SIDEBAR TOGGLE ---
/**
 * Toggles the visibility of the mobile sidebar.
 * @param {boolean} [forceClose=false] - If true, forces the sidebar to close.
 */
const toggleMobileSidebar = (forceClose = false) => {
    if (sidebar && sidebarMobileOverlay) {
        if (forceClose) {
            AppState.isMobileSidebarOpen = false;
        } else {
            AppState.isMobileSidebarOpen = !AppState.isMobileSidebarOpen;
        }

        if (AppState.isMobileSidebarOpen) {
            sidebar.classList.add('open');
            sidebarMobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scroll when sidebar is open
        } else {
            sidebar.classList.remove('open');
            sidebarMobileOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore body scroll
        }
    }
};

/**
 * Updates the active state of mobile navigation items based on the current page.
 */
const updateMobileNavActiveState = () => {
    if (!mobileNav) return;
    const mobileNavItems = mobileNav.querySelectorAll('.mobile-nav-item');
    let targetPage = AppState.currentPage;

    // Map current page to mobile nav's data-page-mobile concept
    if (targetPage.includes('Dashboard') || targetPage.includes('Wallet') || targetPage.includes('Passport') || targetPage === 'gamification' || targetPage === 'teacherRewards') {
        targetPage = 'dashboard'; // Group various dashboard/profile/rewards views under 'dashboard' for mobile nav
    } else if (targetPage === 'messaging') {
        targetPage = 'messages';
    } else if (targetPage === 'events') {
        targetPage = 'events';
    }
    // The default 'profile' is covered by 'dashboard' grouping for simplicity.

    mobileNavItems.forEach(item => {
        if (item.dataset.pageMobile === targetPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// --- CARDANO/MOCK SPECIFIC ACTIONS ---

/**
 * Displays a modal with details of a mock Cardano NFT.
 * @param {string} studentId - The ID of the student who owns the NFT.
 * @param {string} certId - The ID of the NFT certificate.
 */
const showNftExplorer = (studentId, certId) => {
    const student = AppState.mockData.students.find(st => st.id === studentId);
    const certificate = student?.nftCertificates.find(cr => cr.id === certId);

    if (!student || !certificate) {
        showToast("Certificate data not found.", "error");
        return;
    }

    const body = `
        <div class="text-center mb-4">
            <img src="${certificate.imageUrl}" alt="${certificate.name}" class="w-full max-w-xs mx-auto rounded-lg shadow-md border-4 border-sky-200" onerror="this.src='https://placehold.co/300x200/eeeeee/999999?text=Error&font=inter'">
        </div>
        <h4 class="text-xl font-semibold text-sky-700 mb-3">${certificate.name}</h4>
        <div class="space-y-2 text-sm">
            <p><strong>Token ID:</strong> <span class="font-mono text-xs break-all bg-slate-100 p-1 rounded">${certificate.id}_${Date.now()}</span></p>
            <p><strong>Asset Name:</strong> <span class="font-mono text-xs bg-slate-100 p-1 rounded">${certificate.assetName}</span></p>
            <p><strong>Policy ID:</strong> <span class="font-mono text-xs break-all bg-slate-100 p-1 rounded">${certificate.policyId}</span></p>
        </div>
        <hr class="my-4">
        <h5 class="font-semibold mb-2 text-gray-700">Metadata:</h5>
        <ul class="list-disc list-inside text-sm space-y-1.5 pl-4 text-slate-600">
            <li><strong>Issuer:</strong> ${certificate.issuer}</li>
            <li><strong>Issued To:</strong> ${student.name} (ID: ${student.id})</li>
            <li><strong>Issue Date:</strong> ${certificate.issueDate}</li>
            <li><strong>Achievement:</strong> ${certificate.name}</li>
            <li><strong>Embedded EduCoins:</strong> ${certificate.embeddedTokens} <i class="fas fa-coins text-yellow-500"></i></li>
            <li><strong>Verification Link:</strong> <a href="${certificate.verificationLink || '#'}" target="_blank" class="text-sky-500 hover:underline">Verify on Explorer (Mock) <i class="fas fa-external-link-alt fa-xs"></i></a></li>
        </ul>
        <hr class="my-4">
        <h5 class="font-semibold mb-2 text-gray-700">Tx History (Mock):</h5>
        <ul class="list-disc list-inside text-sm space-y-1.5 pl-4 text-slate-600">
            <li>Minted on ${certificate.issueDate} - TxID: <a href="${certificate.verificationLink || '#'}" target="_blank" class="tx-id hover:bg-slate-200">${certificate.txId}</a></li>
            <li>Transferred to ${student.cardanoWallet.address} on ${certificate.issueDate}</li>
        </ul>
        <div class="mt-6 text-xs text-slate-500 p-3 bg-slate-100 rounded-md border flex items-start">
            <i class="fab fa-hive mr-2 mt-0.5 text-sky-500 text-base"></i>
            <div>This is a simulated Cardano NFT explorer view. In a real scenario, this would link to a service like Cardanoscan.io or CExplorer.io, displaying actual on-chain data.</div>
        </div>`;
    const footer = `<button class="btn btn-primary" onclick="closeModal('nftExplorerModal')">Close</button>`;
    showModal('nftExplorerModal', 'Mock Cardano NFT Details', body, footer);
};

/**
 * Displays information about EduCoins.
 */
const showMineableCertInfo = () => {
    const body = `
        <p class="mb-3 text-slate-700">Your EduCoins are more than just points...</p>
        <ul class="list-disc list-inside space-y-2 mb-4 pl-4">
            <li><strong>Earned Achievements:</strong> Earn EduCoins for academic performance, participation, etc.</li>
            <li><strong>Intrinsic Value:</strong> Digitally linked to your NFT certificates.</li>
            <li><strong>Lifelong Asset:</strong> Your Ugbekun Passport is a secure, verifiable asset.</li>
            <li><strong>Future Possibilities:</strong>
                <ul class="list-circle list-inside ml-5 text-sm space-y-1 mt-1">
                    <li>Redeem in school store.</li>
                    <li>Contribute to fees.</li>
                    <li>Access exclusive resources.</li>
                </ul>
            </li>
        </ul>
        <div class="text-sm text-sky-700 p-3 bg-sky-50 rounded-md border flex items-start">
            <i class="fas fa-lightbulb mr-2 mt-0.5 text-lg"></i>
            <div>Ugbekun aims to make your academic journey rewarding!</div>
        </div>`;
    showModal('mineableCertModal', 'About EduCoins', body, `<button class="btn btn-primary" onclick="closeModal('mineableCertModal')">Got it!</button>`);
};

/**
 * Simulates awarding EduCoins to a student by a teacher.
 * @param {string} studentId - The ID of the student to award tokens to.
 */
const awardStudentTokens = (studentId) => {
    const student = AppState.mockData.students.find(st => st.id === studentId);
    const gradeInput = document.getElementById(`grade-${studentId}`);
    const tokensInput = document.getElementById(`tokens-${studentId}`);

    if (student && tokensInput && gradeInput) {
        const tokensAmount = parseInt(tokensInput.value);
        const gradeAward = gradeInput.value.trim();

        if (isNaN(tokensAmount) || tokensAmount < 0) {
            showToast("Invalid tokens amount. Must be a non-negative number.", "error");
            return;
        }

        student.eduCoins += tokensAmount;
        const achievementText = gradeAward ? `Perf: ${gradeAward}` : 'General Achievement';
        student.academicTimeline.push({
            year: new Date().getFullYear(),
            event: `${achievementText} - Teacher Award`,
            type: 'award',
            tokens: tokensAmount,
            txId: `tx_award_${student.id}_${Date.now()}`,
            date: new Date().toISOString().split('T')[0]
        });
        showToast(`${student.name} awarded ${tokensAmount} EduCoins for ${achievementText}!`, "success");

        // Clear inputs after awarding
        gradeInput.value = '';
        tokensInput.value = '50'; // Reset to default

        // Re-render if on the teacher students page
        if (AppState.currentPage === 'teacherStudents') {
            renderMainContent();
        }
    } else {
        showToast("Error awarding tokens. Student or input fields not found.", "error");
    }
};

/**
 * Displays a modal for issuing a new NFT credential.
 */
const showIssueCredentialModal = () => {
    const body = `
        <form id="issueCredentialFormInternal" class="space-y-4">
            <div>
                <label for="studentSelectCertModal" class="block text-sm font-medium text-gray-700 mb-1">Student:</label>
                <select id="studentSelectCertModal" class="input-field mt-1 block w-full bg-white">
                    ${AppState.mockData.students.map(s => `<option value="${s.id}">${s.name} (${s.id})</option>`).join('')}
                </select>
            </div>
            <div>
                <label for="certTypeModal" class="block text-sm font-medium text-gray-700 mb-1">Type:</label>
                <select id="certTypeModal" class="input-field mt-1 block w-full bg-white">
                    <option value="Diploma">Diploma</option>
                    <option value="Certificate" selected>Certificate</option>
                    <option value="Award">Award</option>
                    <option value="Badge">Badge</option>
                </select>
            </div>
            <div>
                <label for="certNameModal" class="block text-sm font-medium text-gray-700 mb-1">Name/Details:</label>
                <input type="text" id="certNameModal" value="Graduation Certificate" class="input-field mt-1 block w-full bg-white">
            </div>
            <div>
                <label for="certIpfsHashModal" class="block text-sm font-medium text-gray-700 mb-1">Evidence/Proof Hash (IPFS Mock):</label>
                <input type="text" id="certIpfsHashModal" value="QmXo..." class="input-field mt-1 block w-full bg-white font-mono" placeholder="Qm...">
            </div>
            <div>
                <label for="certTokensModal" class="block text-sm font-medium text-gray-700 mb-1">Embedded EduCoins:</label>
                <input type="number" id="certTokensModal" value="200" min="0" class="input-field mt-1 block w-full bg-white">
            </div>
        </form>
        <div class="info-box-blockchain">
            <strong>Smart Contract Interaction:</strong> Issuing this credential will (simulate) an interaction with a Cardano smart contract to mint the NFT and record its metadata immutably.
        </div>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('issueCredentialModal')">Cancel</button>
        <button id="confirmIssueCredentialBtn" class="btn btn-primary" onclick="mintMockCertificateFromModal(this)"><span class="btn-spinner"></span><span class="btn-text">Issue Securely (Mint NFT)</span></button>`;
    showModal('issueCredentialModal', 'Issue New Credential (NFT)', body, footer);
};

/**
 * Simulates minting a mock NFT certificate from the modal input.
 * @param {HTMLButtonElement} button - The button element that triggered the minting.
 */
const mintMockCertificateFromModal = (button) => {
    button.classList.add('loading');
    button.disabled = true;

    setTimeout(() => {
        const studentSelectCertModal = document.getElementById('studentSelectCertModal');
        const certTypeModal = document.getElementById('certTypeModal');
        const certNameModal = document.getElementById('certNameModal');
        const certTokensModal = document.getElementById('certTokensModal');
        const certIpfsHashModal = document.getElementById('certIpfsHashModal');

        const studentId = studentSelectCertModal?.value;
        const certType = certTypeModal?.value;
        const certName = certNameModal?.value.trim();
        const embeddedTokensValue = certTokensModal?.value;
        const ipfsHash = certIpfsHashModal?.value.trim();

        if (!studentId || !certType || !certName || embeddedTokensValue == null || !ipfsHash) {
            showToast("Please fill all fields.", "error");
            button.classList.remove('loading');
            button.disabled = false;
            return;
        }

        const embeddedTokens = parseInt(embeddedTokensValue);
        if (isNaN(embeddedTokens) || embeddedTokens < 0) {
            showToast("Embedded EduCoins must be a non-negative number.", "error");
            button.classList.remove('loading');
            button.disabled = false;
            return;
        }

        const student = AppState.mockData.students.find(st => st.id === studentId);
        if (!student) {
            showToast("Student not found.", "error");
            button.classList.remove('loading');
            button.disabled = false;
            return;
        }

        const newCertId = `certNFT${Date.now()}`;
        const txId = `tx_mock_mint_${newCertId.substring(7)}`; // Mock transaction ID

        const newCertificate = {
            id: newCertId,
            name: certName,
            issueDate: new Date().toISOString().split('T')[0],
            issuer: AppState.mockData.school.name,
            policyId: `policy_mock_${certType.toLowerCase()}_${Math.random().toString(36).substr(2, 5)}`,
            assetName: `${certType.replace(/\s/g, '')}_${certName.replace(/\s/g, '').substring(0, 10)}_${student.name.split(' ')[0]}`,
            embeddedTokens: embeddedTokens,
            imageUrl: `https://placehold.co/300x200/e0f2fe/0ea5e9?text=${encodeURIComponent(certName.substring(0, 20))}&font=inter`,
            ipfsHash: ipfsHash,
            txId: txId,
            verificationLink: `https://mock.cardanoscan.io/transaction/${txId}`
        };

        student.nftCertificates.push(newCertificate);
        student.eduCoins += embeddedTokens; // Award EduCoins for the new certificate
        student.academicTimeline.push({
            year: new Date().getFullYear(),
            event: `Received: ${certName} (${certType})`,
            type: 'milestone',
            tokens: embeddedTokens,
            txId: txId,
            date: new Date().toISOString().split('T')[0]
        });

        // Update school's recent mints
        if (AppState.mockData.school.cardanoWallet?.recentMints) {
            AppState.mockData.school.cardanoWallet.recentMints.unshift({ type: certType, studentName: student.name, txId: txId, date: newCertificate.issueDate });
            if (AppState.mockData.school.cardanoWallet.recentMints.length > 10) {
                AppState.mockData.school.cardanoWallet.recentMints.pop(); // Keep list size manageable
            }
        }
        AppState.mockData.school.credentialsIssued++; // Increment total issued credentials

        showToast(`NFT "${certName}" minted for ${student.name}! Tx: ${txId.substring(0, 12)}...`, "success");
        closeModal('issueCredentialModal');

        // Re-render relevant pages to show updated data
        if (['adminCredentials', 'adminSchoolWallet', 'adminDashboard', 'studentDashboard', 'studentWallet'].includes(AppState.currentPage)) {
            renderMainContent();
        }
    }, 1500);
};

/**
 * Displays a modal for adding a new student.
 */
const showAddStudentForm = () => {
    const body = `
        <p class="text-sm text-slate-600 mb-4"><strong>Simulated Action:</strong> Adding a new student to the system. This would also involve DID issuance and initial wallet setup in a real Ugbekun deployment.</p>
        <div class="space-y-4">
            <div>
                <label for="newStudentName" class="block text-sm font-medium mb-1">Name:</label>
                <input type="text" id="newStudentName" class="input-field mt-1 w-full" placeholder="Ada Lovelace">
            </div>
            <div>
                <label for="newStudentClass" class="block text-sm font-medium mb-1">Class:</label>
                <input type="text" id="newStudentClass" class="input-field mt-1 w-full" placeholder="Grade 7C">
            </div>
        </div>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('addStudentModal')">Cancel</button>
        <button class="btn btn-primary" onclick="addMockStudent()">Add Student</button>`;
    showModal('addStudentModal', 'Add New Student', body, footer);
};

/**
 * Simulates adding a new student to the mock data.
 */
const addMockStudent = () => {
    const newStudentNameInput = document.getElementById('newStudentName');
    const newStudentClassInput = document.getElementById('newStudentClass');

    const name = newStudentNameInput?.value.trim();
    const studentClass = newStudentClassInput?.value.trim();

    if (!name || !studentClass) {
        showToast("Please enter both name and class.", "error");
        return;
    }

    const newId = `std${String(Date.now()).slice(-5)}`;
    const newStudent = {
        id: newId,
        name: name,
        class: studentClass,
        did: `did:prism:mock-${name.toLowerCase().replace(/\s/g, '-')}-${Math.random().toString(36).substring(2, 6)}`,
        eduCoins: 0,
        academicTimeline: [{ year: new Date().getFullYear(), event: 'Registered', type: 'milestone', txId: `tx_register_${newId}_${Date.now()}`, date: new Date().toISOString().split('T')[0] }],
        nftCertificates: [],
        cardanoWallet: { address: `addr_mock_${name.toLowerCase().replace(/\s/g, '_')}_${Math.random().toString(36).substr(2, 10)}`, adaBalance: 0.5 },
        fees: { totalDue: 50000, paid: 0, balance: 50000, paymentPlan: 'Termly', nextDueDate: '2024-09-01', paymentHistory: [] }
    };

    AppState.mockData.students.push(newStudent);
    AppState.mockData.school.totalStudents++; // Increment total students for admin dashboard

    // Add to leaderboard (simple, real would update ranks)
    AppState.mockData.leaderboard.push({ studentId: newId, name: name, eduCoins: 0, rank: AppState.mockData.leaderboard.length + 1 });
    // Sort leaderboard to maintain rank order
    AppState.mockData.leaderboard.sort((a, b) => b.eduCoins - a.eduCoins).forEach((entry, idx) => entry.rank = idx + 1);

    showToast(`Student ${name} added and DID issued!`, "success");
    closeModal('addStudentModal');
    // Re-render relevant pages to show updated data
    if (['adminStudents', 'adminDashboard', 'teacherStudents'].includes(AppState.currentPage)) {
        renderMainContent();
    }
};

/**
 * Views student details by opening the public verification modal with the student's ID.
 * @param {string} studentId - The ID of the student to view.
 */
const viewStudentDetails = (studentId) => {
    const student = AppState.mockData.students.find(st => st.id === studentId);
    if (!student) {
        showToast("Student not found.", "error");
        return;
    }
    showPublicVerificationModal(student.id);
};

/**
 * Displays the public verification modal.
 * @param {string} [studentIdToVerify=null] - Optional student ID to pre-fill the input.
 */
const showPublicVerificationModal = (studentIdToVerify = null) => {
    const body = `
        <p class="text-sm text-slate-600 mb-4">Enter Student/Cert ID to view public record. This simulates a public verification portal on Cardano.</p>
        <div class="space-y-4">
            <div>
                <label for="verifyStudentId" class="block text-sm font-medium mb-1">ID (e.g., std001 or certNFT001):</label>
                <input type="text" id="verifyStudentId" class="input-field mt-1 w-full" placeholder="std001 or certNFT001" value="${studentIdToVerify || ''}">
            </div>
            <div id="verificationResult" class="mt-4 p-4 bg-slate-50 rounded-md min-h-[150px] border">Enter ID to see results.</div>
        </div>
        <div class="mt-6 text-xs text-slate-500 p-3 bg-slate-100 rounded-md border flex items-start">
            <i class="fas fa-shield-alt mr-2 mt-0.5 text-green-600 text-base"></i>
            <div><strong>Security & Privacy:</strong> Public records only display selected verifiable information on-chain (like a DID or NFT hash), not sensitive personal data. Full details require consent via Atala PRISM.</div>
        </div>`;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal('verifyModal')">Close</button>
        <button class="btn btn-primary" onclick="performPublicVerification()"><span class="btn-spinner"></span><span class="btn-text">Verify</span></button>`;
    showModal('verifyModal', 'Verify Student Record (Public)', body, footer);

    // If an ID is provided, auto-trigger verification
    if (studentIdToVerify) {
        // Ensure the input field is populated before calling performPublicVerification
        // Use a small timeout to ensure the modal is fully rendered
        setTimeout(() => {
            const verifyInput = document.getElementById('verifyStudentId');
            if (verifyInput) {
                verifyInput.value = studentIdToVerify;
                performPublicVerification();
            }
        }, 50);
    }
};

/**
 * Performs a simulated public verification of a student or certificate ID.
 */
const performPublicVerification = () => {
    const verifyButton = document.querySelector('#verifyModal .btn-primary');
    const idToVerify = document.getElementById('verifyStudentId')?.value.trim();
    const resultDisplay = document.getElementById('verificationResult');

    if (!idToVerify) {
        showToast("Please enter an ID to verify.", "error");
        if (resultDisplay) resultDisplay.innerHTML = `<p class="text-orange-600 p-3 text-center"><i class="fas fa-exclamation-triangle mr-2"></i>Enter ID to verify.</p>`;
        return;
    }

    if (!resultDisplay) return;

    if (verifyButton) {
        verifyButton.classList.add('loading');
        verifyButton.disabled = true;
    }
    resultDisplay.innerHTML = `<div class="text-center p-4"><i class="fas fa-spinner fa-spin text-2xl text-sky-500"></i><p class="mt-2 text-slate-600">Verifying on Cardano blockchain (mock)...</p></div>`;

    setTimeout(() => {
        let foundStudent = null;
        let foundCertificate = null;

        // Try to find by student ID
        foundStudent = AppState.mockData.students.find(st => st.id === idToVerify);

        // If not found by student ID, try to find by certificate ID or asset name
        if (!foundStudent) {
            for (const student of AppState.mockData.students) {
                const cert = student.nftCertificates.find(ct => ct.id === idToVerify || ct.assetName === idToVerify);
                if (cert) {
                    foundStudent = student;
                    foundCertificate = cert;
                    break;
                }
            }
        }

        if (foundStudent) {
            let htmlContent = `
                <h4 class="font-semibold text-lg text-sky-700 mb-1">${foundStudent.name}</h4>
                <p class="text-sm text-slate-500 mb-1">Class: ${foundStudent.class}</p>
                <p class="text-sm text-slate-500 mb-3">EduCoins: ${foundStudent.eduCoins} <i class="fas fa-coins text-yellow-400"></i></p>
                <hr class="my-3">`;

            if (foundCertificate) {
                htmlContent += `
                    <h5 class="font-medium text-md mb-2 text-gray-700">Verified NFT Certificate:</h5>
                    <div class="nft-card p-3.5 rounded-lg shadow-md mb-3 flex items-start space-x-3 bg-gradient-to-br from-sky-50 to-blue-50 border">
                        <img src="${foundCertificate.imageUrl}" alt="${foundCertificate.name}" class="w-24 h-16 object-cover rounded-md border flex-shrink-0" onerror="this.src='https://placehold.co/96x64/eeeeee/999999?text=Error&font=inter'">
                        <div>
                            <p class="font-semibold text-sky-600">${foundCertificate.name}</p>
                            <p class="text-xs text-slate-500">Issued: ${foundCertificate.issueDate} by ${foundCertificate.issuer}</p>
                            <p class="text-xs font-semibold text-green-600 mt-1.5"><i class="fas fa-check-circle"></i> Verified on-chain via DID</p>
                        </div>
                    </div>`;
            } else if (foundStudent.nftCertificates.length > 0) {
                htmlContent += `<h5 class="font-medium text-md mb-2 text-gray-700">Owned NFTs (${foundStudent.nftCertificates.length}):</h5>`;
                foundStudent.nftCertificates.slice(0, 2).forEach(cert => {
                    htmlContent += `
                        <div class="nft-card p-3 rounded-md shadow-sm mb-2 flex items-start space-x-3">
                            <img src="${cert.imageUrl}" alt="${cert.name}" class="w-20 h-12 object-cover rounded-md border flex-shrink-0" onerror="this.src='https://placehold.co/80x48/eeeeee/999999?text=Error&font=inter'">
                            <div>
                                <p class="font-semibold text-sky-600 text-sm">${cert.name}</p>
                                <p class="text-xs text-slate-500">Issued: ${cert.issueDate}</p>
                            </div>
                        </div>`;
                });
                if (foundStudent.nftCertificates.length > 2) {
                    htmlContent += `<p class="text-xs text-slate-500 mt-1">& ${foundStudent.nftCertificates.length - 2} more...</p>`;
                }
            } else {
                htmlContent += `<p class="text-sm text-slate-500">No NFT certificates found in public record.</p>`;
            }

            htmlContent += `
                <hr class="my-3">
                <h5 class="font-medium text-md mb-2 text-gray-700">Key Milestones:</h5>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-1 pl-4">`;
            const publicTimeline = foundStudent.academicTimeline.filter(item => item.type === 'milestone' || item.type === 'award');
            publicTimeline.slice(0, 3).forEach(item => {
                htmlContent += `<li>${item.event} (${item.year}) ${item.txId ? `<a href="https://mock.cardanoscan.io/transaction/${item.txId}" target="_blank" class="text-xs text-sky-500 hover:underline">(Tx)</a>` : ''}</li>`;
            });
            if (publicTimeline.length === 0) {
                htmlContent += `<li>No public milestones.</li>`;
            }
            htmlContent += `</ul>`;
            resultDisplay.innerHTML = htmlContent;
        } else {
            resultDisplay.innerHTML = `<p class="text-red-600 p-3 text-center"><i class="fas fa-times-circle mr-2"></i>No record found for ID: ${idToVerify}. Please check the ID and try again.</p>`;
        }

        if (verifyButton) {
            verifyButton.classList.remove('loading');
            verifyButton.disabled = false;
        }
    }, 700);
};

// --- EVENT LISTENERS ---
// Centralized event listener for login button
loginButton.addEventListener('click', () => {
    const role = roleSelect.value;
    const usernameValue = usernameInput.value.trim();
    const username = usernameValue || role; // Default to role if username is empty

    AppState.currentUser = { username: username, role: role, did: `did:prism:mock-${username.toLowerCase().replace(/\s/g, '-')}-${Math.random().toString(36).substring(2, 6)}` };

    // Assign specific mock data IDs and DIDs based on role and provided username/default
    if (role === 'student') {
        const studentData = AppState.mockData.students.find(s => s.name.toLowerCase().includes(username.toLowerCase()) || s.id === username) || AppState.mockData.students[0];
        AppState.currentUser.studentId = studentData.id;
        AppState.currentUser.did = studentData.did;
    } else if (role === 'teacher') {
        const teacherData = AppState.mockData.teachers.find(t => t.name.toLowerCase().includes(username.toLowerCase()) || t.id === username) || AppState.mockData.teachers[0];
        AppState.currentUser.teacherId = teacherData.id;
        AppState.currentUser.did = teacherData.did;
    } else if (role === 'admin') {
        AppState.currentUser.did = AppState.mockData.school.did;
    }

    showToast(`Logged in as ${AppState.currentUser.username} (${role})`, "success");
    showDashboard();
});

// Centralized event listener for logout button
logoutButton.addEventListener('click', () => {
    showToast("Logged out.", "info");
    document.body.classList.add('logging-out');
    setTimeout(() => {
        showLoginPage();
        document.body.classList.remove('logging-out');
    }, 500);
});

// Centralized event listener for public record verification button
verifyRecordPublicButton.addEventListener('click', () => { showPublicVerificationModal(); });

// Centralized event listener for connect wallet button
if (connectWalletButton) {
    connectWalletButton.addEventListener('click', () => {
        showToast('Simulating Cardano wallet connection... (CIP-30)', 'info');
        setTimeout(() => {
            if (AppState.currentUser) {
                AppState.currentUser.walletConnected = true;
                AppState.currentUser.walletAddress = `addr_test1q${Math.random().toString(36).substring(2, 100)}`;
                connectWalletButton.innerHTML = `<i class="fas fa-check-circle mr-2 text-green-500"></i> Wallet Connected`;
                connectWalletButton.classList.add('text-green-600', 'bg-green-100', 'dark:text-green-300', 'dark:bg-green-700/30');
                connectWalletButton.disabled = true;
                showToast(`Wallet connected: ${AppState.currentUser.walletAddress.substring(0, 15)}...`, 'success');
            } else {
                showToast('Please log in first to connect a wallet.', 'error');
            }
        }, 1500);
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();

    // Event listener for role selection change
    roleSelect.addEventListener('change', () => {
        const currentUsername = usernameInput.value.trim();
        const isDefaultRoleUsername = ['admin', 'teacher', 'student', 'parent'].includes(currentUsername.toLowerCase());
        const isId = AppState.mockData.students.some(s => s.id === currentUsername) || AppState.mockData.teachers.some(t => t.id === currentUsername);

        // If the current username is empty, a default role username, or not a mock ID,
        // then update the username input with a relevant default for the selected role.
        if (currentUsername === '' || isDefaultRoleUsername || !isId) {
            if (roleSelect.value === 'admin') usernameInput.value = 'admin';
            else if (roleSelect.value === 'teacher') usernameInput.value = AppState.mockData.teachers[0].name.split(' ')[1].toLowerCase();
            else if (roleSelect.value === 'student') usernameInput.value = AppState.mockData.students[0].name.split(' ')[0].toLowerCase();
            else if (roleSelect.value === 'parent') usernameInput.value = 'parent';
        }
    });

    // Set initial username input based on default role selection on page load
    if (roleSelect.value === 'admin') usernameInput.value = 'admin';
    else if (roleSelect.value === 'teacher') usernameInput.value = AppState.mockData.teachers[0].name.split(' ')[1].toLowerCase();
    else if (roleSelect.value === 'student') usernameInput.value = AppState.mockData.students[0].name.split(' ')[0].toLowerCase();
    else if (roleSelect.value === 'parent') usernameInput.value = 'parent';

    showLoginPage();

    // Mobile Navigation Event Listeners
    hamburgerButton?.addEventListener('click', () => toggleMobileSidebar());
    sidebarMobileOverlay?.addEventListener('click', () => toggleMobileSidebar(true));

    // Event delegation for mobile navigation items
    mobileNav?.addEventListener('click', (e) => {
        const mobileNavItem = e.target.closest('.mobile-nav-item');
        if (mobileNavItem) {
            e.preventDefault();
            const page = mobileNavItem.dataset.pageMobile;
            let targetPage = page;

            // Map mobile nav pages to actual AppState pages
            if (page === 'dashboard' || page === 'profile') {
                switch (AppState.currentUser?.role) {
                    case 'student': targetPage = 'studentDashboard'; break;
                    case 'teacher': targetPage = 'teacherDashboard'; break;
                    case 'admin': targetPage = 'adminDashboard'; break;
                    case 'parent': targetPage = 'parentDashboard'; break;
                    default: targetPage = AppState.currentPage;
                }
            } else if (page === 'messages') {
                targetPage = 'messaging';
            }
            // 'events' maps directly

            navigateTo(targetPage);
        }
    });

    // Attach listener to the main theme toggle button if it's the static one from initial HTML
    const mainThemeToggle = document.getElementById('themeToggle');
    if (mainThemeToggle) {
        mainThemeToggle.addEventListener('click', toggleTheme);
    }
});
