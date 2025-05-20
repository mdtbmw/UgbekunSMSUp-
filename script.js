// --- APPLICATION STATE AND MOCK DATA ---
const AppState = {
    currentUser: null, 
    currentPage: 'login', 
    openSubmenus: {}, 
    currentMessageView: 'inbox', 
    selectedMessageId: null,
    theme: localStorage.getItem('ugbekunTheme') || 'light', // 'light' or 'dark'
    mockData: { 
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
                    { year: 2023, event: 'Enrolled & Digital ID Created', type: 'milestone', details: 'Student identity verified and DID issued.', txId: 'tx_mock_enroll_aisha_000' },
                    { year: 2023, event: 'Promoted to Grade 4', type: 'milestone', tokens: 50, details: 'Academic progression recorded on-chain.', txId: 'tx_mock_promo_aisha_001' },
                    { year: 2024, event: 'Top Performer - Term 1 (Math)', type: 'award', tokens: 75, details: 'Achievement tokenized for exceptional performance.', txId: 'tx_mock_award_aisha_002' },
                    { year: 2024, event: 'Science Fair Participant - Project "Volcanoes"', type: 'activity', details: 'Participation in extracurriculars noted.', tokens: 25 },
                    { year: 2024, event: 'Library Monitor Duty - Q2', type: 'responsibility', tokens: 20, details: 'Contribution to school community rewarded.', txId: 'tx_mock_duty_aisha_003'}
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
                    { year: 2024, event: 'Promoted to Grade 6', type: 'milestone', tokens: 100, details: 'Academic progression recorded.', txId: 'tx_mock_promo_chinedu_001' },
                    { year: 2024, event: 'Debate Club President', type: 'leadership', tokens: 50, details: 'Leadership role acknowledged.', txId: 'tx_mock_leader_chinedu_002'}
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
                    { year: 2023, event: 'Joined Premier Academy', type: 'milestone', details: 'Student identity verified.', txId: 'tx_mock_join_binta_001' },
                    { year: 2024, event: 'Art Competition - Honorable Mention', type: 'award', tokens: 30, details: 'Artistic talent recognized.', txId: 'tx_mock_art_binta_002'}
                ],
                nftCertificates: [],
                cardanoWallet: { address: 'addr_mock_student_binta_garba_zzzzzzzzzz', adaBalance: 1.2 },
                fees: { 
                    totalDue: 50000, paid: 0, balance: 50000, 
                    paymentPlan: "Termly",
                    nextDueDate: "2024-05-01", 
                    paymentHistory: []
                }
            }
        ],
        teachers: [
            { id: 'tchr001', name: 'Mr. David Adewale', subject: 'Mathematics', did: 'did:prism:mock-david-adewale-aaaa', teacherTokens: 1350, cardanoWallet: { address: 'addr_mock_teacher_david_adewale_zzzzzzzzzz', adaBalance: 15.0 }, performanceMetrics: { studentSuccessRate: "88%", coursesDeveloped: 3, positiveFeedback: "94%", avgStudentCoinGrowth: 15 } }, // Added avgStudentCoinGrowth
            { id: 'tchr002', name: 'Mrs. Fatima Yusuf', subject: 'English Language', did: 'did:prism:mock-fatima-yusuf-bbbb', teacherTokens: 1020, cardanoWallet: { address: 'addr_mock_teacher_fatima_yusuf_wwwwwwwwww', adaBalance: 12.3 }, performanceMetrics: { studentEngagement: "92%", publications: 1, peerReviews: "Excellent", avgStudentCoinGrowth: 12 } }
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
                    { source: 'Grant for Science Lab', amount: 50000, date: '2024-04-10', txId: 'tx_income_grant_001', category: 'Grant', purpose: 'Science Lab Upgrade'}
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
                    { department: 'Professional Development (Teachers)', allocated: 15000, spent: 5000, details: "Workshops, training, certifications (funded by TDF tokens)."}
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
                { time: '11:00 - 12:00', subject: 'Science', teacher: 'Mr. Okeke', class: 'Grade 5A', room: 'Lab A', resources: ['Experiment Handout', 'Safety Goggles'] },
            ],
            'Tuesday': [
                { time: '09:00 - 10:00', subject: 'History', teacher: 'Mrs. Bello', class: 'Grade 5A', room: '103', resources: ['Ancient Civilizations Slides'] },
                { time: '10:00 - 11:00', subject: 'Mathematics', teacher: 'Mr. Adewale', class: 'Grade 5A', room: '101', resources: ['Geometry Worksheet'] },
            ]
        },
        messages: [ 
            { id: 'msg001', sender: 'Mr. Adewale', recipientId: 'std001', subject: 'Math Homework Reminder', body: 'Hi Aisha, please remember to submit your math homework by tomorrow. Let me know if you have any questions! You can submit via the portal or an IPFS link.', date: '2025-05-18T10:30:00Z', read: false, type: 'inbox', attachments: [{name: 'hw_guidelines.pdf', size: '120KB'}] },
            { id: 'msg002', sender: 'Admin Office', recipientId: 'all_teachers', subject: 'Staff Meeting & Marlowe Finance Training', body: 'Dear Teachers, there will be a staff meeting on Friday at 2 PM in the main hall. Agenda: Q3 Review, Upcoming Events, Introduction to Marlowe for transparent expense claims. Attendance is mandatory.', date: '2025-05-17T15:00:00Z', read: true, type: 'inbox' },
            { id: 'msg003', senderId: 'std001', recipient: 'Mr. Adewale', subject: 'Re: Math Homework Reminder', body: 'Thank you, Mr. Adewale. I will submit it soon. I plan to use IPFS for the submission.', date: '2025-05-18T11:00:00Z', read: true, type: 'sent' },
        ],
        academicSubjects: [ 
            { id: 'sub001', name: 'Mathematics', department: 'Science & Math', headTeacher: 'Mr. Adewale', description: 'Covers algebra, geometry, calculus, and statistics. Learning outcomes tracked via verifiable credentials.', curriculumLink: 'ipfs://QmMathCurriculumHash' }, 
            { id: 'sub002', name: 'English Language', department: 'Arts & Humanities', headTeacher: 'Mrs. Yusuf', description: 'Focuses on grammar, literature, comprehension, and creative writing. Portfolios can be minted as NFTs.', curriculumLink: 'ipfs://QmEnglishCurriculumHash' },
            { id: 'sub003', name: 'Basic Science (with Atala PRISM for Lab Access)', department: 'Science & Math', headTeacher: 'Mr. Okeke', description: 'Introduction to physics, chemistry, and biology concepts. Lab access controlled via DIDs.', curriculumLink: 'ipfs://QmScienceCurriculumHash' },
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
                voters: ['admin', 'tchr001'], 
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
                voters: [],
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
            { id: 'crit007', name: 'Competition Winner (School Level)', type: 'Achievement', coins: 100, autoTrigger: false, description: 'For winning internal school competitions.'},
            { id: 'crit008', name: 'Perfect Attendance (Monthly)', type: 'Attendance', coins: 25, autoTrigger: true, description: 'Awarded for no absences or tardies in a month.'}
        ],
        leaderboard: [ // Top 5 students by EduCoins
            { studentId: 'std002', name: 'Chinedu Okoro', eduCoins: 550, rank: 1 },
            { studentId: 'std001', name: 'Aisha Bello', eduCoins: 325, rank: 2 },
            { studentId: 'std003', name: 'Binta Garba', eduCoins: 210, rank: 3 },
            { studentId: 'std004', name: 'Emeka Adeyemi (New Mock)', eduCoins: 150, rank: 4 },
            { studentId: 'std005', name: 'Fatima Sani (New Mock)', eduCoins: 120, rank: 5 },
        ]
    }
};

// --- DOM ELEMENTS ---
const loginPage = document.getElementById('loginPage');
const dashboardArea = document.getElementById('dashboardArea');
const sidebarNav = document.getElementById('sidebarNav');
const mainContent = document.getElementById('mainContent');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const roleSelect = document.getElementById('role');
const usernameInput = document.getElementById('username');
const modalsContainer = document.getElementById('modalsContainer');
const verifyRecordPublicButton = document.getElementById('verifyRecordPublicButton');
const connectWalletButton = document.getElementById('connectWalletButton'); 
const themeToggle = document.getElementById('themeToggle'); 
const gamificationPageContent = document.getElementById('gamificationPageContent');


// --- CHART INSTANCES ---
let enrollmentChartInstance, credentialTypeChartInstance, financialChartInstance;


// --- UI RENDERING FUNCTIONS ---

function applyTheme() {
    if (AppState.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    const themeToggleInSidebar = document.getElementById('themeToggleInSidebar');
    if (themeToggleInSidebar) {
        themeToggleInSidebar.innerHTML = AppState.theme === 'dark' 
            ? '<i class="fas fa-sun fa-fw"></i>' 
            : '<i class="fas fa-moon fa-fw"></i>';
        themeToggleInSidebar.title = AppState.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
}

function toggleTheme() {
    AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ugbekunTheme', AppState.theme);
    applyTheme();
    if (typeof initializeAdminCharts === "function" && AppState.currentPage === 'adminDashboard') {
        initializeAdminCharts();
    }
     if (typeof renderGamificationPage === "function" && AppState.currentPage === 'gamification') { // Re-render gamification page if open
        renderMainContent();
    }
}


function renderSidebar() { 
    const user = AppState.currentUser;
    const sidebarHeader = document.getElementById('sidebarHeader'); 

    if (user && sidebarHeader) { 
        let avatarText = user.username.charAt(0).toUpperCase();
        let userDisplayName = user.username;
        let userRoleDisplay = user.role.charAt(0).toUpperCase() + user.role.slice(1);


        if (user.role === 'student' && AppState.mockData.students.find(s => s.id === user.studentId)) {
            const studentData = AppState.mockData.students.find(s => s.id === user.studentId);
            avatarText = studentData.name.charAt(0).toUpperCase();
            userDisplayName = studentData.name.split(' ')[0]; 
        } else if (user.role === 'teacher' && AppState.mockData.teachers.find(t => t.id === user.teacherId)) {
            const teacherData = AppState.mockData.teachers.find(t => t.id === user.teacherId);
            avatarText = teacherData.name.charAt(0).toUpperCase();
            userDisplayName = teacherData.name.split(' ')[0]; 
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
            </div>
        `;
        const themeToggleInSidebar = document.getElementById('themeToggleInSidebar');
        if (themeToggleInSidebar) {
            themeToggleInSidebar.addEventListener('click', toggleTheme);
        }
    }
    
    const createLink = (page, icon, text) => `<a href="#" class="sidebar-link flex items-center space-x-3" data-page="${page}"><i class="fas ${icon} fa-fw"></i><span class="text-sm">${text}</span></a>`;
    const createCategory = (id, icon, text, sublinks) => `
        <div class="sidebar-category">
            <div class="flex items-center space-x-3" onclick="toggleSubmenu('${id}')">
                <i class="fas ${icon} fa-fw"></i>
                <span class="text-sm font-medium">${text}</span>
                <i class="fas fa-chevron-down ml-auto transform transition-transform duration-200 ${AppState.openSubmenus[id] ? 'rotate-180' : ''}"></i>
            </div>
            <div id="${id}" class="sidebar-submenu ${AppState.openSubmenus[id] ? 'open' : ''} ml-3 space-y-0.5">
                ${sublinks.map(sub => createLink(sub.page, sub.icon, sub.text)).join('')}
            </div>
        </div>`;

    let links = '';
    if (['student', 'teacher', 'admin'].includes(AppState.currentUser.role)) {
        links += `<div class="pt-2 pb-1 px-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">Cardano Core</div>`;
        if (AppState.currentUser.role === 'student') {
            links += createLink('studentDashboard', 'fa-user-graduate', 'My Academic Passport');
            links += createLink('studentWallet', 'fa-wallet', 'My Cardano Wallet');
            links += createLink('gamification', 'fa-trophy', 'Rewards & Progress'); // New Link for Student
        }
        if (AppState.currentUser.role === 'teacher') {
            links += createLink('teacherDashboard', 'fa-chalkboard-teacher', 'Teacher Dashboard');
            links += createLink('teacherRewards', 'fa-coins', 'My Rewards & Wallet');
            links += createLink('teacherProfessionalDevelopment', 'fa-award', 'Professional Development'); 
            links += createLink('gamification', 'fa-star', 'Student Gamification'); // New Link for Teacher
        }
        if (AppState.currentUser.role === 'admin') {
            links += createLink('adminDashboard', 'fa-tachometer-alt', 'Admin Dashboard');
            links += createLink('adminCredentials', 'fa-certificate', 'Credentials (NFTs)');
            links += createLink('adminSchoolWallet', 'fa-university', 'School Cardano Wallet');
            links += createLink('adminApiDocs', 'fa-code', 'API & Interoperability');
            links += createLink('adminGovernance', 'fa-landmark', 'Governance (Voting)');
            links += createLink('adminAuditLog', 'fa-history', 'Audit Log');
            links += createLink('gamificationSettings', 'fa-cogs', 'Gamification Settings'); // New Link for Admin
        }
    }
     if (AppState.currentUser.role === 'parent') { 
        links += createLink('parentDashboard', 'fa-child', 'My Child\'s Progress');
    }

    links += `<div class="pt-4 pb-1 px-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">School Management</div>`;
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
    if (['admin', 'teacher', 'student'].includes(AppState.currentUser.role)) {
        const learningSublinks = [];
        if (['teacher', 'student'].includes(AppState.currentUser.role)) {
            learningSublinks.push({ page: 'liveClassRooms', icon: 'fa-video', text: 'Live Classrooms' });
            learningSublinks.push({ page: 'attachmentsBook', icon: 'fa-paperclip', text: 'Attachments Book' });
        }
         if (['admin','teacher', 'student'].includes(AppState.currentUser.role)) {
             learningSublinks.push({ page: 'library', icon: 'fa-book-open', text: 'Library' });
             learningSublinks.push({ page: 'schoolStore', icon: 'fa-store', text: 'School Store' }); 
        }
        if (learningSublinks.length > 0) links += createCategory('learningSubmenu', 'fa-chalkboard', 'Learning Tools', learningSublinks);
    }
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
    if (['admin', 'teacher'].includes(AppState.currentUser.role)) {
        links += createLink('attendance', 'fa-user-check', 'Attendance');
    }
    if (['admin', 'teacher', 'student', 'parent'].includes(AppState.currentUser.role)) {
        links += createLink('events', 'fa-calendar-star', 'Events');
        links += createLink('messaging', 'fa-envelope-open-text', 'Messaging');
    }
    if (AppState.currentUser.role === 'admin') {
        links += createCategory('accountingSubmenu', 'fa-coins', 'Finances', [ 
            { page: 'studentAccounting', icon: 'fa-file-invoice-dollar', text: 'Student Accounting' },
            { page: 'officeAccounting', icon: 'fa-landmark', text: 'Office Accounting' },
        ]);
        links += createLink('bulkComms', 'fa-bullhorn', 'Bulk SMS/Email');
        links += createLink('reports', 'fa-chart-pie', 'Reports');
    }
     if (['admin', 'teacher'].includes(AppState.currentUser.role) && AppState.currentUser.role !== 'admin') { 
        links += createLink('reports', 'fa-chart-line', 'My Reports');
    }
    if (AppState.currentUser.role === 'admin') {
         links += `<div class="pt-4 pb-1 px-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">System</div>`;
        links += createLink('frontendSettings', 'fa-desktop', 'Frontend Settings');
        links += createLink('customDomain', 'fa-globe', 'Custom Domain');
        links += createLink('settings', 'fa-cogs', 'General Settings');
    }

    sidebarNav.innerHTML = links;
    // sidebarNav.classList.remove('pr-1'); // Already removed

    sidebarNav.querySelectorAll('.sidebar-link').forEach(linkEl => {
        if (linkEl.dataset.page === AppState.currentPage) {
            linkEl.classList.add('active');
            const parentSubmenu = linkEl.closest('.sidebar-submenu');
            if (parentSubmenu && !parentSubmenu.classList.contains('open')) {
                AppState.openSubmenus[parentSubmenu.id] = true;
                parentSubmenu.classList.add('open');
                const chevron = parentSubmenu.previousElementSibling.querySelector('.fa-chevron-down');
                if(chevron) chevron.classList.add('rotate-180');
            }
        }
        linkEl.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(linkEl.dataset.page);
        });
    });
}

// Helper function to generate a consistent hex color from a string (for avatars)
function getHexColorFromString(str) {
    let hash = 0;
    if (!str || str.length === 0) return "A0AEC0"; // Default color if string is empty
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; // Convert to 32bit integer
    }
    const color = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return "00000".substring(0, 6 - color.length) + color;
}


window.toggleSubmenu = function(submenuId) { 
    AppState.openSubmenus[submenuId] = !AppState.openSubmenus[submenuId];
    const submenu = document.getElementById(submenuId);
    const icon = submenu.previousElementSibling.querySelector('.fa-chevron-down');
    if (submenu) {
        submenu.classList.toggle('open');
        icon.classList.toggle('rotate-180');
    }
}

function renderAdminCredentialListTable(containerId) {
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

    allCredentials.forEach(cert => {
        const row = `
            <tr>
                <td class="truncate max-w-[100px]">${cert.id}</td>
                <td>${cert.name.split(' ')[0]}</td> 
                <td>${cert.studentName}</td>
                <td>${cert.issueDate}</td>
                <td><span class="px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700">Verified</span></td>
                <td>
                    <button class="text-sky-600 hover:text-sky-700 hover:underline text-xs px-2 py-1 rounded-md bg-sky-100 hover:bg-sky-200 transition-colors btn" onclick="showNftExplorer('${cert.studentId}', '${cert.id}')"><i class="fas fa-eye mr-1"></i>View</button>
                </td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}


function renderMainContent() { 
    mainContent.innerHTML = ''; 
    let pageTitle = AppState.currentPage.replace(/([A-Z])/g, ' $1').trim();
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
    
    if(AppState.currentPage !== 'adminDashboard' && AppState.currentPage !== 'gamification' && AppState.currentPage !== 'gamificationSettings') {
        mainContent.innerHTML = `<h1 class="text-3xl font-bold mb-8 capitalize brand-text">${pageTitle}</h1>`;
    }
    
    let content = mainContent.innerHTML; 
    
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
            const school = AppState.mockData.school;
            content = ` 
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
                                ${AppState.mockData.students[0].academicTimeline.slice(0,3).map(item => `
                                    <li class="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700 border-opacity-50">
                                        <span><i class="fas ${item.type === 'award' ? 'fa-award text-orange-500' : 'fa-check-circle text-green-500'} mr-2 w-5 text-center"></i>${item.event}</span>
                                        <a href="https://mock.cardanoscan.io/transaction/${item.txId}" target="_blank" class="tx-id hover:bg-slate-200 dark:hover:bg-slate-600" title="View on Mock Explorer">${item.txId?.substring(0,10)}...</a>
                                    </li>
                                `).join('')}
                                 <li class="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700 border-opacity-50"><span><i class="fas fa-certificate text-blue-500 mr-2 w-5 text-center"></i>Certificate NFT Issued: Grade 4 Cert</span><a href="#" class="tx-id hover:bg-slate-200 dark:hover:bg-slate-600">tx_mock_mint_cert001...</a></li>
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
                            <button class="text-xs text-orange-500 dark:text-orange-400 hover:underline font-medium" onclick="navigateTo('teacherRewards')">View Rewards System</button>
                        </div>
                    </div>
                </div>
            `;
            setTimeout(initializeAdminCharts, 0); 
            break;
        case 'studentDashboard':
            const student = AppState.mockData.students.find(s => s.id === AppState.currentUser.studentId) || AppState.mockData.students[0]; 
            content += `
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
                                <p class="text-xs text-slate-500 mt-1">Policy ID: <span class="tx-id">${cert.policyId.substring(0,15)}...</span></p>
                            </div>
                            <div class="flex flex-col sm:items-end space-y-2 self-start sm:self-center">
                                <button class="btn btn-primary px-3 py-1.5 text-sm w-full sm:w-auto" onclick="showNftExplorer('${student.id}', '${cert.id}')"><i class="fab fa-hive mr-1"></i>View Details</button>
                                <button class="btn btn-success text-xs w-full sm:w-auto" onclick="showToast('Mock: Sharing verifiable credential for ${cert.name}...', 'success')"><i class="fas fa-share-alt mr-1"></i>Share VC</button>
                            </div>
                        </div>`).join('') : '<p class="text-slate-500 py-4 text-center">No NFT certificates yet. Keep learning to earn them!</p>'}
                </div>
                <div class="card p-6 md:p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-5 brand-text">My Academic Timeline (On-Chain Verifiable)</h2>
                    <ul class="space-y-4">
                        ${student.academicTimeline.map(item => `
                            <li class="border-l-4 ${item.type === 'award' ? 'border-yellow-400' : item.type === 'milestone' ? 'border-sky-500' : 'border-slate-300'} pl-4 py-3 bg-white rounded-r-md shadow hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <span class="font-semibold text-slate-700">${item.event}</span>
                                        <span class="text-sm text-slate-500 block sm:inline sm:ml-2">- ${item.year}</span>
                                        ${item.txId ? `<a href="https://mock.cardanoscan.io/transaction/${item.txId}" target="_blank" class="block text-xs text-sky-500 hover:underline mt-0.5" title="View Transaction">Tx: ${item.txId.substring(0,15)}... <i class="fas fa-external-link-alt fa-xs"></i></a>` : ''}
                                    </div>
                                    ${item.tokens ? `<span class="ml-2 token-balance whitespace-nowrap">+${item.tokens} <i class="fas fa-coins"></i></span>` : ''}
                                </div>
                            </li>`).join('')}
                         ${student.academicTimeline.length === 0 ? '<li class="text-slate-500 py-3 text-center">No timeline events yet.</li>' : ''}
                    </ul>
                </div>`;
            break;
        case 'studentWallet':
            const studentForWallet = AppState.mockData.students.find(s => s.id === AppState.currentUser.studentId) || AppState.mockData.students[0];
            content += `
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
                        ${studentForWallet.nftCertificates.length > 0 ? studentForWallet.nftCertificates.map(nft => `<div class="p-4 border rounded-md bg-sky-50 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow"><img src="${nft.imageUrl}" alt="${nft.name}" class="w-20 h-14 object-cover rounded border" onerror="this.src='https://placehold.co/80x56/eeeeee/999999?text=Error&font=inter'"><div><span class="text-md font-medium text-sky-700">${nft.name}</span><p class="text-xs text-slate-500">Policy ID: <span class="font-mono">${nft.policyId.substring(0,15)}...</span></p></div><button class="ml-auto btn btn-primary px-3 py-1 text-xs" onclick="showNftExplorer('${studentForWallet.id}', '${nft.id}')">Details</button></div>`).join('') : '<p class="text-sm text-slate-500 py-3 text-center">No NFTs owned in this mock wallet.</p>'}
                         <div class="mt-8 flex space-x-3"><button class="btn btn-primary opacity-50 cursor-not-allowed"><i class="fas fa-paper-plane mr-2"></i>Send</button><button class="btn btn-secondary opacity-50 cursor-not-allowed"><i class="fas fa-qrcode mr-2"></i>Receive</button></div>
                    </div>
                </div>`;
            break;
        case 'teacherDashboard': 
            const teacherForDash = AppState.mockData.teachers.find(t => t.id === AppState.currentUser.teacherId) || AppState.mockData.teachers[0];
            content += `
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div class="card stat-card stat-card-main p-5 rounded-lg"><h3 class="text-slate-500 text-sm font-medium">TEACHER TOKENS <span class="tooltip"><i class="fas fa-question-circle text-xs text-slate-400 ml-1"></i><span class="tooltiptext">Tokens for professional development, resources, etc. Claimable via mock smart contract.</span></span></h3><p class="text-4xl font-bold text-sky-600 mt-1">${teacherForDash.teacherTokens} <i class="fas fa-medal text-amber-500"></i></p><button class="text-xs text-sky-500 hover:underline mt-2 btn p-1" onclick="navigateTo('teacherRewards')">View Wallet & Claim</button></div>
                    <div class="card stat-card stat-card-main p-5 rounded-lg"><h3 class="text-slate-500 text-sm font-medium">STUDENTS MANAGED</h3><p class="text-4xl font-bold text-sky-600 mt-1">${AppState.mockData.students.length}</p><button class="text-xs text-sky-500 hover:underline mt-2 btn p-1" onclick="navigateTo('adminStudents')">View Students</button></div>
                     <div class="card stat-card stat-card-red-main p-5 rounded-lg"><h3 class="text-slate-500 text-sm font-medium">PENDING ACTIONS</h3><p class="text-4xl font-bold text-red-500 mt-1">3</p><button class="text-xs text-red-500 hover:underline mt-2 btn p-1" onclick="showToast('Mock: Review 2 assignments, 1 attendance query.', 'info')">View Actions</button></div>
                </div>
                <div class="card p-6 md:p-8 rounded-lg"><h2 class="text-2xl font-semibold mb-5 brand-text">Quick Actions</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><button class="btn btn-primary p-4 text-left" onclick="navigateTo('teacherStudents')"><i class="fas fa-award fa-lg mr-2 mb-1"></i><span class="block font-semibold">Grade Students</span><span class="text-xs opacity-80">Enter grades & award tokens.</span></button><button class="btn btn-primary p-4 text-left" onclick="navigateTo('attendance')"><i class="fas fa-user-check fa-lg mr-2 mb-1"></i><span class="block font-semibold">Take Attendance</span><span class="text-xs opacity-80">Mark daily attendance.</span></button><button class="btn btn-primary p-4 text-left" onclick="navigateTo('homework')"><i class="fas fa-pencil-ruler fa-lg mr-2 mb-1"></i><span class="block font-semibold">Manage Homework</span><span class="text-xs opacity-80">Assign & review homework.</span></button></div></div>`;
            break;
        case 'teacherRewards': 
        case 'teacherWallet': 
            const teacherForWallet = AppState.mockData.teachers.find(t => t.id === AppState.currentUser.teacherId) || AppState.mockData.teachers[0];
            content += `
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
            break;
        case 'adminCredentials':
            content += `
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
            setTimeout(() => renderAdminCredentialListTable('adminCredentialList'), 0);
            break;
        case 'adminSchoolWallet': 
            content += `
                <div class="card p-6 md:p-8 rounded-lg">
                     <div class="flex justify-between items-center mb-3">
                        <h2 class="text-2xl font-semibold brand-text"><i class="fas fa-university mr-2"></i>School's Cardano Wallet</h2>
                        <span class="cardano-tag"><i class="fas fa-wallet"></i>Operational Wallet</span>
                    </div>
                     <p class="mb-6 text-slate-600 text-sm">Simulation of the school's operational wallet on Cardano, used for managing school-wide assets, minting fees, and potentially interacting with financial smart contracts.</p>
                    <div class="space-y-4 text-lg">
                        <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">School Name</p><span class="font-bold text-sky-700 text-xl">${AppState.mockData.school.name}</span></div>
                        <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">Wallet Address</p><span class="text-base font-mono text-sky-600 break-all">${AppState.mockData.school.cardanoWallet.address}</span></div>
                        <div class="p-4 border rounded-lg bg-slate-50"><p class="text-sm font-medium text-slate-500">ADA Balance</p><span class="font-bold text-sky-700 text-2xl">${AppState.mockData.school.cardanoWallet.adaBalance} ADA</span></div>
                    </div>
                    <div class="mt-8">
                        <h3 class="text-xl font-semibold mb-3 text-gray-700">Recent NFT Mints (School-Initiated)</h3>
                        <ul id="recentMintsLog" class="list-disc list-inside text-sm text-slate-600 space-y-1.5 max-h-48 overflow-y-auto p-3 bg-slate-50 rounded-md border">
                            ${AppState.mockData.school.cardanoWallet.recentMints.length > 0 ? AppState.mockData.school.cardanoWallet.recentMints.map(m => `<li>${m}</li>`).join('') : '<li>No recent school-initiated mints.</li>'}
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
            break;
        case 'adminApiDocs': 
            content += placeholderPage('API & Interoperability', 'Ugbekun SMSUP+ is designed for a connected educational future. We envision robust APIs to enable seamless integration, leveraging Cardano for secure data exchange and verification.', 'fa-cogs', 
            `<div class="info-box-blockchain mt-4"><strong>Cardano Integration Points:</strong> APIs would expose endpoints for Atala PRISM DID resolution, NFT certificate verification against on-chain data, and interaction with Marlowe financial contracts, enabling trusted third-party integrations.</div>`);
            break;
        case 'parentDashboard': 
            const child = AppState.mockData.students[0]; 
            content += `
                <div class="card p-6 md:p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-5 brand-text">My Child's Progress: ${child.name}</h2>
                    <div class="mb-6 p-4 bg-slate-50 rounded-lg border"><p class="text-lg"><strong>Class:</strong> ${child.class}</p><p class="text-lg"><strong>EduCoins:</strong> ${child.eduCoins} <i class="fas fa-coins text-yellow-400"></i></p></div>
                    <h3 class="text-xl font-semibold mb-3 text-gray-700">Recent Achievements:</h3>
                    <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6 pl-4">${child.academicTimeline.slice(-3).map(item => `<li>${item.event} (${item.year}) ${item.txId ? `<a href="#" onclick="showToast('Mock: Verifying on chain: ${item.txId}','info')" class="text-xs text-sky-500 ml-1">(Verify)</a>` : ''}</li>`).join('')} ${child.academicTimeline.length === 0 ? '<li>No achievements.</li>' : ''}</ul>
                     <div class="mt-6"><h3 class="text-xl font-semibold mb-3 text-gray-700">NFT Certificates:</h3>${child.nftCertificates.length > 0 ? child.nftCertificates.map(cert => `<div class="nft-card p-4 rounded-lg shadow-sm mb-3 flex items-center space-x-4"><img src="${cert.imageUrl}" alt="${cert.name}" class="w-24 h-16 object-cover rounded-md border" onerror="this.src='https://placehold.co/96x64/eeeeee/999999?text=Error&font=inter'"><div><h4 class="font-medium text-sky-700 text-md">${cert.name}</h4><p class="text-xs text-slate-500">Issued: ${cert.issueDate}</p></div><button class="ml-auto btn btn-primary px-3 py-1 text-xs" onclick="showNftExplorer('${child.id}', '${cert.id}')">Details</button></div>`).join('') : '<p class="text-slate-500 text-sm py-3 text-center">No NFT certificates.</p>'}</div>
                    <div class="mt-4"><button class="btn btn-outline w-full" onclick="showPublicVerificationModal('${child.id}')"><i class="fas fa-search-plus mr-2"></i>View Child's Public Record</button></div>
                    <p class="mt-8 text-sm text-slate-500 text-center">(Parent portal simplified for demo.)</p>
                </div>`;
            break;
        
        // --- DETAILED MOCK PAGES ---
        case 'library':
            content += `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
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
            setTimeout(renderLibraryBooks, 0); 
            break;
        case 'events':
            content += `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
                    <h2 class="text-2xl font-semibold text-gray-700">Upcoming School Events</h2>
                    ${AppState.currentUser.role === 'admin' ? '<button class="btn btn-primary" onclick="showCreateEventModal()"><i class="fas fa-plus mr-2"></i>Create Event</button>' : ''}
                </div>
                <div id="eventsList" class="space-y-5">
                    </div>
            </div>`;
            setTimeout(renderSchoolEvents, 0);
            break;
        case 'attendance':
             content += `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <h2 class="text-2xl font-semibold text-gray-700">Class Attendance</h2>
                    <div class="flex items-center gap-2">
                        <label for="attendanceClassSelect" class="text-sm font-medium text-gray-700">Select Class:</label>
                        <select id="attendanceClassSelect" class="input-field" onchange="renderAttendanceTable()">
                            <option value="Grade 5A">Grade 5A</option>
                            <option value="Grade 6B">Grade 6B</option>
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
            setTimeout(renderAttendanceTable,0);
            break;
        case 'homework':
            content += `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
                    <h2 class="text-2xl font-semibold text-gray-700">Homework Assignments</h2>
                    ${AppState.currentUser.role === 'teacher' || AppState.currentUser.role === 'admin' ? '<button class="btn btn-primary" onclick="showAssignHomeworkModal()"><i class="fas fa-plus mr-2"></i>Assign New</button>' : ''}
                </div>
                <div id="homeworkList" class="space-y-4">
                    </div>
            </div>`;
            setTimeout(renderHomeworkList, 0);
            break;
        case 'academicTimetable':
            content += `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
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
            setTimeout(renderAcademicTimetable, 0);
            break;
        case 'messaging':
            content += renderMessagingPage();
            setTimeout(() => {
                document.querySelectorAll('.message-list-item').forEach(item => {
                    item.addEventListener('click', () => {
                        AppState.selectedMessageId = item.dataset.messageId;
                        AppState.currentMessageView = 'read'; 
                        renderMainContent(); 
                    });
                });
                const composeBtn = document.getElementById('composeNewMessageBtn');
                if (composeBtn) {
                    composeBtn.addEventListener('click', () => {
                        AppState.currentMessageView = 'compose';
                        AppState.selectedMessageId = null;
                        renderMainContent();
                    });
                }
                 document.querySelectorAll('[data-message-view]').forEach(button => {
                    button.addEventListener('click', (e) => {
                        AppState.currentMessageView = e.currentTarget.dataset.messageView;
                        AppState.selectedMessageId = null;
                        renderMainContent();
                    });
                });
                const composeForm = document.getElementById('composeMessageForm');
                if(composeForm) {
                    composeForm.addEventListener('submit', handleSendMessage);
                }
            }, 0);
            break;
        case 'academicSubjects':
            content += renderAcademicSubjectsPage();
            break;
        case 'adminGovernance':
            content += renderAdminGovernancePage();
            break;
        case 'studentAccounting':
            content += renderStudentAccountingPage();
            break;
        case 'officeAccounting':
            content += renderOfficeAccountingPage();
            break;
        case 'gamification': // For Student and Teacher view
        case 'gamificationSettings': // For Admin view
            content = renderGamificationPage(); // Single function to handle all roles
            break;


        // --- STANDARD SMS FEATURES (Placeholders with Icons) ---
        case 'teacherStudents': 
             content += `
                <div class="card p-6 md:p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6 brand-text">Manage Student Performance</h2>
                    ${AppState.mockData.students.map(student => `<div class="mb-6 p-5 border rounded-lg bg-white shadow hover:shadow-lg transition-shadow"><h3 class="font-semibold text-xl text-sky-700 mb-2">${student.name} - ${student.class}</h3><p class="text-sm text-slate-500 mb-3">EduCoins: ${student.eduCoins}</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="grade-${student.id}" class="block text-sm font-medium text-gray-700 mb-1">Grade/Comment:</label><input type="text" id="grade-${student.id}" class="input-field w-full shadow-sm" placeholder="e.g., Math A+"></div><div><label for="tokens-${student.id}" class="block text-sm font-medium text-gray-700 mb-1">Award EduCoins:</label><input type="number" id="tokens-${student.id}" class="input-field w-full shadow-sm" value="50" min="0"></div></div><button class="btn btn-primary mt-4 text-sm" onclick="awardStudentTokens('${student.id}')"><i class="fas fa-check-circle mr-1.5"></i>Submit & Award</button></div>`).join('')}
                </div>`;
            break;
        case 'adminStudents': 
             content += `
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
            break;
        case 'studentSchedule': content += placeholderPage('Class Schedule', 'Students can view their daily and weekly class schedules here, including subjects, teachers, and timings.', 'fa-calendar-alt'); break;
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
        case 'schoolStore': content += renderSchoolStorePage(); break; 
        case 'teacherProfessionalDevelopment': content += renderTeacherProfessionalDevelopmentPage(); break; 


        default:
            content = mainContent.innerHTML + `<p class="text-slate-500 p-6 text-center">This section is under construction for the demo. Please select an option from the sidebar.</p>`;
    }
    mainContent.innerHTML = content; 
}

// --- DETAILED MOCK PAGE RENDERERS ---

function renderGamificationPage() {
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
                    ${[...student.academicTimeline, ...student.readingLogs, ...student.participation]
                        .sort((a,b) => new Date(b.date || b.year) - new Date(a.date || a.year)) // Crude sort, needs better date handling
                        .slice(0, 10) // Show recent 10
                        .map(item => `
                        <div class="p-3 rounded-md bg-white dark:bg-slate-700/50 shadow-sm border-l-4 ${item.type === 'award' || item.coinsEarned > 0 ? 'border-green-500' : item.type === 'milestone' ? 'border-sky-500' : 'border-slate-300'}">
                            <div class="flex justify-between items-center">
                                <span class="font-medium text-slate-700 dark:text-slate-200">${item.event || item.activity || `Read: ${AppState.mockData.libraryBooks.find(b=>b.id === item.bookId)?.title || 'Book'}`}</span>
                                <span class="text-xs text-slate-500 dark:text-slate-400">${item.date || item.year}</span>
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
}

// Helper for gamification page
function getUpcomingMilestones(student) {
    // This is a mock. A real version would calculate progress towards defined criteria.
    const milestones = [
        { name: 'Read 5 Library Books', coins: 50, current: student.readingLogs?.length || 0, target: 5 },
        { name: 'Achieve 95% Attendance This Term', coins: 100, current: 92, target: 95 }, // Mock current attendance
        { name: 'Submit 10 Homeworks On Time', coins: 75, current: AppState.mockData.homeworkAssignments.filter(h => h.assignedTo === student.class && h.status !== 'Pending Submission').length, target: 10 }
    ];
    return milestones.map(m => ({ ...m, progress: Math.min(100, (m.current / m.target) * 100).toFixed(0) })).filter(m => m.progress < 100);
}


function renderSchoolStorePage() {
    let storeContent = `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
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
                        <button class="btn btn-primary btn-sm w-full text-xs mt-1" onclick="showToast('Mock: Adding ${item.name} to cart. Tx: tx_store_purchase_${item.id}', 'info')">
                            <i class="fas fa-cart-plus mr-1.5"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>`;
    });

    storeContent += `</div></div>`;
    return storeContent;
}

function renderTeacherProfessionalDevelopmentPage() {
    let pdContent = `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
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
}


function renderLibraryBooks() {
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

    filteredBooks.forEach(book => {
        const availabilityClass = book.availableCopies > 0 ? 'text-green-600' : 'text-red-600';
        const availabilityText = book.availableCopies > 0 ? `${book.availableCopies} Available` : 'Checked Out';
        const buttonDisabled = book.availableCopies === 0 ? 'opacity-50 cursor-not-allowed' : '';

        grid.innerHTML += `
            <div class="card flex flex-col rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
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
            </div>
        `;
    });
}

function requestBook(button, bookId, bookTitle) {
    button.classList.add('loading');
    button.disabled = true;
    setTimeout(() => {
        showToast(`Mock: Request to borrow '${bookTitle}' sent.`, 'info');
        button.classList.remove('loading');
        const book = AppState.mockData.libraryBooks.find(b => b.id === bookId);
        if (book && book.availableCopies > 0) {
            // Simulating taking a copy
            // book.availableCopies--; // This would be a real state change
            // renderLibraryBooks(); // Re-render to show updated count
        }
         button.disabled = book && book.availableCopies === 0; 
    }, 1500);
}


function filterLibraryBooks() { 
    renderLibraryBooks();
}

function renderSchoolEvents() {
    const list = document.getElementById('eventsList');
    if (!list) return;
    list.innerHTML = ''; 

    if (AppState.mockData.schoolEvents.length === 0) {
        list.innerHTML = `<p class="text-center text-slate-500 py-8">No upcoming events scheduled.</p>`;
        return;
    }

    AppState.mockData.schoolEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        
        list.innerHTML += `
            <div class="card flex flex-col sm:flex-row items-start p-5 rounded-lg gap-4 hover:shadow-lg transition-shadow">
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
            </div>
        `;
    });
}

function renderAttendanceTable() {
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
    
    records.forEach(record => {
        tbody.innerHTML += `
            <tr>
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
            </tr>
        `;
    });
}

function saveAttendance(button) {
    button.classList.add('loading');
    button.disabled = true;
    setTimeout(() => {
        showToast('Mock: Attendance records saved successfully!', 'success');
        button.classList.remove('loading');
        button.disabled = false;
    }, 1500);
}

function renderHomeworkList() {
    const homeworkListDiv = document.getElementById('homeworkList');
    if (!homeworkListDiv) return;
    homeworkListDiv.innerHTML = '';

    const assignments = AppState.mockData.homeworkAssignments; 

    if (assignments.length === 0) {
        homeworkListDiv.innerHTML = `<p class="text-center text-slate-500 py-8">No homework assignments found.</p>`;
        return;
    }

    assignments.forEach(hw => {
        let statusColor = 'text-yellow-600 bg-yellow-100';
        if (hw.status.toLowerCase().includes('submitted')) statusColor = 'text-blue-600 bg-blue-100';
        if (hw.status.toLowerCase().includes('graded')) statusColor = 'text-green-600 bg-green-100';
        if (hw.status.toLowerCase().includes('overdue')) statusColor = 'text-red-600 bg-red-100';

        homeworkListDiv.innerHTML += `
            <div class="card p-5 rounded-lg hover:shadow-lg transition-shadow">
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
                    ${(AppState.currentUser.role === 'student' && hw.status === 'Pending Submission') ? '<button class="btn btn-primary text-sm" onclick="showSubmitHomeworkModal(\''+hw.id+'\')"><i class="fas fa-upload mr-2"></i>Submit</button>' : ''}
                    ${(AppState.currentUser.role === 'teacher' && (hw.status === 'Submitted' || hw.status.includes('Graded'))) ? '<button class="btn btn-secondary text-sm"><i class="fas fa-marker mr-2"></i>Grade/View</button>' : ''}
                    <button class="btn btn-outline text-sm"><i class="fas fa-eye mr-2"></i>View Details</button>
                </div>
            </div>
        `;
    });
}

function renderAcademicTimetable() {
    const timetableBody = document.getElementById('timetableBody');
    if (!timetableBody) return;
    timetableBody.innerHTML = '';

    const timeSlots = ['09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 01:00', '02:00 - 03:00']; 
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const userClass = AppState.currentUser.role === 'student' ? (AppState.mockData.students.find(s => s.id === AppState.currentUser.studentId) || {}).class : null;


    timeSlots.forEach(slot => {
        let rowHtml = `<tr class="border-b border-slate-200"><td class="p-3 font-medium text-slate-600 bg-slate-50">${slot}</td>`;
        days.forEach(day => {
            const entry = AppState.mockData.timetable[day]?.find(e => e.time === slot && (AppState.currentUser.role !== 'student' || e.class === userClass));
            if (entry) {
                rowHtml += `<td class="p-3 border-l border-slate-200">
                                <div class="font-semibold text-sky-700">${entry.subject}</div>
                                <div class="text-xs text-slate-500">${entry.teacher}</div>
                                ${AppState.currentUser.role !== 'student' ? `<div class="text-xs text-purple-600">${entry.class}</div>` : ''}
                            </td>`;
            } else {
                rowHtml += `<td class="p-3 border-l border-slate-200 text-slate-400 text-xs">-</td>`;
            }
        });
        rowHtml += `</tr>`;
        timetableBody.innerHTML += rowHtml;
    });
     if (timetableBody.innerHTML === '') {
        timetableBody.innerHTML = `<tr><td colspan="${days.length + 1}" class="text-center text-slate-500 py-8">Timetable not available for your class or role.</td></tr>`;
    }
}

function renderMessagingPage() {
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
}

function renderAcademicSubjectsPage() {
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
}

function renderAdminGovernancePage() {
    let governanceContent = `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold text-gray-700">Governance Proposals</h2>
            <button class="btn btn-primary" onclick="showCreateProposalModal()"><i class="fas fa-plus mr-2"></i>New Proposal</button>
        </div>
        <div class="info-box-blockchain mb-6">
            <strong>Decentralized Governance:</strong> Proposals and voting can be managed on the Cardano blockchain for ultimate transparency and immutability. Each vote is a transaction, ensuring integrity.
        </div>
        <div id="governanceProposalsList" class="space-y-5">`;

    AppState.mockData.governanceProposals.forEach(proposal => {
        const canVote = proposal.status.startsWith('Open for Voting') && !proposal.voters.includes(AppState.currentUser.username); 
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
                ${!canVote && proposal.voters.includes(AppState.currentUser.username) ? '<p class="text-xs text-green-600 mt-2 text-center">You have voted on this proposal.</p>' : ''}
                ` : `<p class="text-xs text-green-700 font-semibold mt-2 text-center">Result Tx (Mock): <span class="tx-id">${proposal.resultTx || 'N/A'}</span></p>`}
                ${proposal.status.startsWith('Open') && (proposal.requiredQuorum || proposal.threshold) ? `<p class="text-xs text-slate-400 mt-2">Quorum: ${proposal.requiredQuorum || 'N/A'} | Threshold: ${proposal.threshold || 'N/A'}</p>` : ''}
            </div>
        `;
    });

    governanceContent += `</div></div>`;
    return governanceContent;
}

function renderStudentAccountingPage() {
    let content = `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
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
    setTimeout(() => {
        const firstStudentId = AppState.mockData.students[0]?.id;
        if (firstStudentId) renderStudentFeeDetails(firstStudentId);
    }, 0);
    return content;
}

function renderOfficeAccountingPage() {
    const schoolFinances = AppState.mockData.school.officeFinances;
    let content = `<div class="card p-6 md:p-8 rounded-lg no-hover-effect">
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
    return content;
}


// --- CHART INITIALIZATION --- 
function initializeAdminCharts() {
    const school = AppState.mockData.school;
    Chart.defaults.font.family = 'Inter'; 
    Chart.defaults.color = AppState.theme === 'dark' ? '#9ca3af' : '#64748b'; 
    Chart.defaults.borderColor = AppState.theme === 'dark' ? 'rgba(75, 85, 99, 0.4)' : 'rgba(203,213,225,0.2)';


    if (enrollmentChartInstance) enrollmentChartInstance.destroy();
    if (credentialTypeChartInstance) credentialTypeChartInstance.destroy();
    if (financialChartInstance) financialChartInstance.destroy();

    const enrollmentCtx = document.getElementById('adminEnrollmentChart')?.getContext('2d');
    if (enrollmentCtx) {
        enrollmentChartInstance = new Chart(enrollmentCtx, {
            type: 'bar',
            data: { labels: ['T1', 'T2', 'T3', 'Now'], datasets: [{ label: 'Enrollment', data: [school.totalStudents - 100, school.totalStudents - 50, school.totalStudents - 20, school.totalStudents], backgroundColor: 'rgba(249, 115, 22, 0.6)', borderColor: 'rgba(234, 88, 12, 1)', borderWidth:1.5, borderRadius:4, barThickness:'flex', maxBarThickness:40 }] }, 
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: {display:false} }, scales: { y:{beginAtZero:true, grid:{color:Chart.defaults.borderColor}, ticks:{font:{size:10},color:Chart.defaults.color}}, x:{grid:{display:false}, ticks:{font:{size:10},color:Chart.defaults.color}} } }
        });
    }
    const credentialTypeCtx = document.getElementById('adminCredentialTypeChart')?.getContext('2d');
    if (credentialTypeCtx) {
        credentialTypeChartInstance = new Chart(credentialTypeCtx, {
            type: 'doughnut',
            data: { labels: ['Diplomas', 'Certificates', 'Badges'], datasets: [{ data: [Math.floor(school.credentialsIssued*0.4), Math.floor(school.credentialsIssued*0.35), Math.floor(school.credentialsIssued*0.25)], backgroundColor: ['rgba(249, 115, 22, 0.85)','rgba(102, 126, 234, 0.85)','rgba(118, 75, 162, 0.85)'], borderColor:['#FFFFFF'], borderWidth:2, hoverOffset:8 }] }, 
            options: { responsive: true, maintainAspectRatio: false, cutout:'60%', plugins: { legend: {display:true, position:'bottom', labels:{boxWidth:12, padding:15, font:{size:10},color:Chart.defaults.color}}} }
        });
    }
    const financialCtx = document.getElementById('adminFinancialChart')?.getContext('2d');
    if (financialCtx) {
        financialChartInstance = new Chart(financialCtx, {
            type: 'line',
            data: { labels: ['Jan','Feb','Mar','Apr','May'], datasets: [{label:'Fees Collected ($)', data:[25000,30000,28000,35000, school.feesCollected-118000], borderColor:'rgba(249, 115, 22, 1)', backgroundColor:'rgba(249, 115, 22, 0.15)', fill:true, tension:0.4, pointBackgroundColor:'rgba(249,115,22,1)', pointBorderColor:'#fff', pointHoverRadius:7, pointRadius:5, pointHoverBorderWidth:2}, {label:'Funds Allocated ($)', data:[22000,28000,25000,32000, school.fundsAllocated-107000], borderColor:'rgba(102, 126, 234, 1)', backgroundColor:'rgba(102, 126, 234, 0.15)', fill:true, tension:0.4, pointBackgroundColor:'rgba(102,126,234,1)', pointBorderColor:'#fff', pointHoverRadius:7, pointRadius:5, pointHoverBorderWidth:2}] }, 
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: {display:true, position:'top', labels:{boxWidth:12, padding:10, font:{size:10},color:Chart.defaults.color}} }, scales: { y:{beginAtZero:true, grid:{color:Chart.defaults.borderColor}, ticks:{font:{size:10},color:Chart.defaults.color}}, x:{grid:{display:false}, ticks:{font:{size:10},color:Chart.defaults.color}} } }
        });
    }
}

// --- MINIFIED CORE FUNCTIONS (Navigation, Modals, Toasts, Cardano Actions) ---
function navigateTo(page){AppState.currentPage=page;sidebarNav.querySelectorAll('.sidebar-link.active').forEach(l=>l.classList.remove('active'));renderSidebar();renderMainContent();window.scrollTo({top:0,behavior:'smooth'})}
function showLoginPage(){
    document.body.classList.add('login-page-active'); 
    loginPage.classList.remove('hidden');loginPage.classList.add('flex');dashboardArea.classList.add('hidden');dashboardArea.classList.remove('flex');AppState.currentPage='login';AppState.currentUser=null;AppState.openSubmenus={}}
function showDashboard(){
    document.body.classList.remove('login-page-active'); 
    loginPage.classList.add('hidden');loginPage.classList.remove('flex');dashboardArea.classList.remove('hidden');dashboardArea.classList.add('flex');let iPage;switch(AppState.currentUser.role){case 'student':iPage='studentDashboard';break;case 'teacher':iPage='teacherDashboard';break;case 'admin':iPage='adminDashboard';break;case 'parent':iPage='parentDashboard';break;default:iPage='studentDashboard'}AppState.openSubmenus={};navigateTo(iPage)}
function showModal(id,title,bodyContent,footerContent=''){closeModal(id);const mHTML=`<div id="${id}" class="modal-backdrop fixed inset-0 z-40 flex items-center justify-center p-4 opacity-0 pointer-events-none" onclick="if(event.target===this)closeModal('${id}');"><div class="modal-content card w-full max-w-lg p-0 transform scale-95 opacity-0 max-h-[90vh] flex flex-col rounded-lg"><div class="flex justify-between items-center p-5 border-b"><h3 class="text-xl font-semibold brand-text">${title}</h3><button class="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100" onclick="closeModal('${id}')" aria-label="Close"><i class="fas fa-times text-xl"></i></button></div><div class="p-6 flex-grow overflow-y-auto text-slate-600">${bodyContent}</div>${footerContent?`<div class="p-4 border-t text-right space-x-2 bg-slate-50 rounded-b-lg">${footerContent}</div>`:''}</div></div>`;modalsContainer.insertAdjacentHTML('beforeend',mHTML);const mEl=document.getElementById(id);void mEl.offsetWidth;mEl.classList.remove('opacity-0','pointer-events-none');mEl.classList.add('opacity-100');const mcEl=mEl.querySelector('.modal-content');mcEl.classList.remove('scale-95','opacity-0');mcEl.classList.add('scale-100','opacity-100')}
function closeModal(id){const mEl=document.getElementById(id);if(mEl){mEl.classList.add('opacity-0');const mcEl=mEl.querySelector('.modal-content');if(mcEl)mcEl.classList.add('scale-95','opacity-0');setTimeout(()=>{mEl.remove()},300)}}
let toastCount=0;function showToast(msg,type='success',duration=5000){toastCount++;const tId=`toast-${toastCount}`;let bg,txt,icon,bdr,prog;switch(type){case 'success':bg='bg-green-500';txt='text-white';icon='fa-check-circle';bdr='border-green-600';prog='bg-green-300';break;case 'error':bg='bg-red-500';txt='text-white';icon='fa-exclamation-circle';bdr='border-red-600';prog='bg-red-300';break;case 'info':bg='bg-sky-500';txt='text-white';icon='fa-info-circle';bdr='border-sky-600';prog='bg-sky-300';break;default:bg='bg-slate-700';txt='text-white';icon='fa-bell';bdr='border-slate-800';prog='bg-slate-500'}const tHTML=`<div id="${tId}" class="${bg} ${txt} p-4 rounded-lg shadow-xl flex items-start space-x-3 transition-all duration-300 opacity-0 transform translate-y-5 border-l-4 ${bdr} relative overflow-hidden"><i class="fas ${icon} text-xl mt-0.5"></i><span class="flex-grow text-sm">${msg}</span><button onclick="this.closest('#${tId}').remove()" class="ml-auto text-xl leading-none opacity-70 hover:opacity-100 p-1 -mr-1 -mt-1" aria-label="Close">&times;</button><div class="absolute bottom-0 left-0 h-1 ${prog} animate-toast-progress" style="animation-duration:${duration}ms;"></div></div><style>@keyframes toast-progress{0%{width:100%}100%{width:0%}}.animate-toast-progress{animation-name:toast-progress;animation-timing-function:linear}</style>`;const tcEl=document.getElementById('toastContainer');if(tcEl){tcEl.insertAdjacentHTML('beforeend',tHTML);const tEl=document.getElementById(tId);void tEl.offsetWidth;tEl.classList.remove('opacity-0','translate-y-5');tEl.classList.add('opacity-100','translate-y-0');setTimeout(()=>{if(tEl){tEl.classList.add('opacity-0');tEl.style.transform='translateX(120%)';setTimeout(()=>tEl.remove(),300)}},duration)}else{console.error("Toast container not found!")}}
function showNftExplorer(sId,cId){const s=AppState.mockData.students.find(st=>st.id===sId);const c=s?.nftCertificates.find(cr=>cr.id===cId);if(!s||!c){showToast("Cert data not found.","error");return}const b=`<div class="text-center mb-4"><img src="${c.imageUrl}" alt="${c.name}" class="w-full max-w-xs mx-auto rounded-lg shadow-md border-4 border-sky-200" onerror="this.src='https://placehold.co/300x200/eeeeee/999999?text=Error&font=inter'"></div><h4 class="text-xl font-semibold text-sky-700 mb-3">${c.name}</h4><div class="space-y-2 text-sm"><p><strong>Token ID:</strong> <span class="font-mono text-xs break-all bg-slate-100 p-1 rounded">${c.id}_${Date.now()}</span></p><p><strong>Asset Name:</strong> <span class="font-mono text-xs bg-slate-100 p-1 rounded">${c.assetName}</span></p><p><strong>Policy ID:</strong> <span class="font-mono text-xs break-all bg-slate-100 p-1 rounded">${c.policyId}</span></p></div><hr class="my-4"><h5 class="font-semibold mb-2 text-gray-700">Metadata:</h5><ul class="list-disc list-inside text-sm space-y-1.5 pl-4 text-slate-600"><li><strong>Issuer:</strong> ${c.issuer}</li><li><strong>Issued To:</strong> ${s.name} (ID: ${s.id})</li><li><strong>Issue Date:</strong> ${c.issueDate}</li><li><strong>Achievement:</strong> ${c.name}</li><li><strong>Embedded EduCoins:</strong> ${c.embeddedTokens} <i class="fas fa-coins text-yellow-500"></i></li><li><strong>Verification Link:</strong> <a href="${c.verificationLink || '#'}" target="_blank" class="text-sky-500 hover:underline">Verify on Explorer (Mock) <i class="fas fa-external-link-alt fa-xs"></i></a></li></ul><hr class="my-4"><h5 class="font-semibold mb-2 text-gray-700">Tx History (Mock):</h5><ul class="list-disc list-inside text-sm space-y-1.5 pl-4 text-slate-600"><li>Minted on ${c.issueDate} - TxID: <a href="${c.verificationLink || '#'}" target="_blank" class="tx-id hover:bg-slate-200">${c.txId}</a></li><li>Transferred to ${s.cardanoWallet.address} on ${c.issueDate}</li></ul><div class="mt-6 text-xs text-slate-500 p-3 bg-slate-100 rounded-md border flex items-start"><i class="fab fa-hive mr-2 mt-0.5 text-sky-500 text-base"></i><div>This is a simulated Cardano NFT explorer view. In a real scenario, this would link to a service like Cardanoscan.io or CExplorer.io, displaying actual on-chain data.</div></div>`;const f=`<button class="btn btn-primary" onclick="closeModal('nftExplorerModal')">Close</button>`;showModal('nftExplorerModal','Mock Cardano NFT Details',b,f)}
function showMineableCertInfo(){const b=`<p class="mb-3 text-slate-700">Your EduCoins are more than just points...</p><ul class="list-disc list-inside space-y-2 mb-4 pl-4"><li><strong>Earned Achievements:</strong> Earn EduCoins for academic performance, participation, etc.</li><li><strong>Intrinsic Value:</strong> Digitally linked to your NFT certificates.</li><li><strong>Lifelong Asset:</strong> Your Ugbekun Passport is a secure, verifiable asset.</li><li><strong>Future Possibilities:</strong><ul class="list-circle list-inside ml-5 text-sm space-y-1 mt-1"><li>Redeem in school store.</li><li>Contribute to fees.</li><li>Access exclusive resources.</li></ul></li></ul><div class="text-sm text-sky-700 p-3 bg-sky-50 rounded-md border flex items-start"><i class="fas fa-lightbulb mr-2 mt-0.5 text-lg"></i><div>Ugbekun aims to make your academic journey rewarding!</div></div>`;showModal('mineableCertModal','About EduCoins',b,`<button class="btn btn-primary" onclick="closeModal('mineableCertModal')">Got it!</button>`)}
function awardStudentTokens(sId){const s=AppState.mockData.students.find(st=>st.id===sId);const gI=document.getElementById(`grade-${sId}`);const tI=document.getElementById(`tokens-${sId}`);if(s&&tI&&gI){const tA=parseInt(tI.value);const gA=gI.value.trim();if(isNaN(tA)||tA<0){showToast("Invalid tokens.","error");return}s.eduCoins+=tA;const aT=gA?`Perf: ${gA}`:'General Achiev.';s.academicTimeline.push({year:new Date().getFullYear(),event:`${aT} - Teacher Award`,type:'award',tokens:tA});showToast(`${s.name} awarded ${tA} EduCoins for ${aT}!`,"success");if(AppState.currentPage==='teacherStudents')renderMainContent();gI.value='';tI.value='50'}else{showToast("Error awarding.","error")}}
function showIssueCredentialModal(){const b=`<form id="issueCredentialFormInternal" class="space-y-4"><div><label for="studentSelectCertModal" class="block text-sm font-medium text-gray-700 mb-1">Student:</label><select id="studentSelectCertModal" class="input-field mt-1 block w-full bg-white">${AppState.mockData.students.map(s=>`<option value="${s.id}">${s.name} (${s.id})</option>`).join('')}</select></div><div><label for="certTypeModal" class="block text-sm font-medium text-gray-700 mb-1">Type:</label><select id="certTypeModal" class="input-field mt-1 block w-full bg-white"><option value="Diploma">Diploma</option><option value="Certificate" selected>Certificate</option><option value="Award">Award</option><option value="Badge">Badge</option></select></div><div><label for="certNameModal" class="block text-sm font-medium text-gray-700 mb-1">Name/Details:</label><input type="text" id="certNameModal" value="Graduation Certificate" class="input-field mt-1 block w-full bg-white"></div><div><label for="certIpfsHashModal" class="block text-sm font-medium text-gray-700 mb-1">Evidence/Proof Hash (IPFS Mock):</label><input type="text" id="certIpfsHashModal" value="QmXo..." class="input-field mt-1 block w-full bg-white font-mono" placeholder="Qm..."></div><div><label for="certTokensModal" class="block text-sm font-medium text-gray-700 mb-1">Embedded EduCoins:</label><input type="number" id="certTokensModal" value="200" min="0" class="input-field mt-1 block w-full bg-white"></div></form><div class="info-box-blockchain"><strong>Smart Contract Interaction:</strong> Issuing this credential will (simulate) an interaction with a Cardano smart contract to mint the NFT and record its metadata immutably.</div>`;const f=`<button class="btn btn-secondary" onclick="closeModal('issueCredentialModal')">Cancel</button><button id="confirmIssueCredentialBtn" class="btn btn-primary" onclick="mintMockCertificateFromModal(this)"><span class="btn-spinner"></span><span class="btn-text">Issue Securely (Mint NFT)</span></button>`;showModal('issueCredentialModal','Issue New Credential (NFT)',b,f)}
function mintMockCertificateFromModal(button){button.classList.add('loading');button.disabled=true;setTimeout(()=>{const sId=document.getElementById('studentSelectCertModal')?.value;const cT=document.getElementById('certTypeModal')?.value;const cN=document.getElementById('certNameModal')?.value.trim();const eTV=document.getElementById('certTokensModal')?.value;const ipfsHash=document.getElementById('certIpfsHashModal')?.value.trim();if(!sId||!cT||!cN||eTV==null||!ipfsHash){showToast("Fill all fields.","error");button.classList.remove('loading');button.disabled=false;return}const eT=parseInt(eTV);if(isNaN(eT)||eT<0){showToast("Tokens must be non-negative.","error");button.classList.remove('loading');button.disabled=false;return}const s=AppState.mockData.students.find(st=>st.id===sId);if(!s){showToast("Student not found.","error");button.classList.remove('loading');button.disabled=false;return}const nId=`certNFT${Date.now()}`;const txId=`tx_mock_mint_${nId.substring(7)}`;const nC={id:nId,name:cN,issueDate:new Date().toISOString().split('T')[0],issuer:AppState.mockData.school.name,policyId:`policy_mock_${cT.toLowerCase()}_${Math.random().toString(36).substr(2,5)}`,assetName:`${cT.replace(/\s/g,'')}_${cN.replace(/\s/g,'').substring(0,10)}_${s.name.split(' ')[0]}`,embeddedTokens:eT,imageUrl:`https://placehold.co/300x200/e0f2fe/0ea5e9?text=${encodeURIComponent(cN.substring(0,20))}&font=inter`,ipfsHash:ipfsHash,txId:txId,verificationLink:`https://mock.cardanoscan.io/transaction/${txId}`};s.nftCertificates.push(nC);s.eduCoins+=eT;s.academicTimeline.push({year:new Date().getFullYear(),event:`Received: ${cN} (${cT})`,type:'milestone',tokens:eT,txId:txId});if(AppState.mockData.school.cardanoWallet?.recentMints){AppState.mockData.school.cardanoWallet.recentMints.unshift(`Minted '${cN}' for ${s.name} (Tx: ${txId.substring(0,12)}...)`);if(AppState.mockData.school.cardanoWallet.recentMints.length>10)AppState.mockData.school.cardanoWallet.recentMints.pop()}showToast(`NFT "${cN}" minted for ${s.name}! Tx: ${txId.substring(0,12)}...`,"success");closeModal('issueCredentialModal');if(['adminCredentials','adminSchoolWallet','adminDashboard','studentDashboard','studentWallet'].includes(AppState.currentPage))renderMainContent()},1500)}
function showAddStudentForm(){const b=`<p class="text-sm text-slate-600 mb-4"><strong>Simulated Action:</strong> ...</p><div class="space-y-4"><div><label for="newStudentName" class="block text-sm font-medium mb-1">Name:</label><input type="text" id="newStudentName" class="input-field mt-1 w-full" placeholder="Ada Lovelace"></div><div><label for="newStudentClass" class="block text-sm font-medium mb-1">Class:</label><input type="text" id="newStudentClass" class="input-field mt-1 w-full" placeholder="Grade 7C"></div></div>`;const f=`<button class="btn btn-secondary" onclick="closeModal('addStudentModal')">Cancel</button><button class="btn btn-primary" onclick="addMockStudent()">Add Student</button>`;showModal('addStudentModal','Add New Student',b,f)}
function addMockStudent(){const nI=document.getElementById('newStudentName');const cI=document.getElementById('newStudentClass');const n=nI?.value.trim();const sC=cI?.value.trim();if(!n||!sC){showToast("Enter name & class.","error");return}const nId=`std${String(Date.now()).slice(-5)}`;const nS={id:nId,name:n,class:sC,eduCoins:0,academicTimeline:[{year:new Date().getFullYear(),event:'Registered',type:'milestone'}],nftCertificates:[],cardanoWallet:{address:`addr_mock_${n.toLowerCase().replace(/\s/g,'_')}_${Math.random().toString(36).substr(2,10)}`,adaBalance:0.5}};AppState.mockData.students.push(nS);showToast(`Student ${n} added!`,"success");closeModal('addStudentModal');if(['adminStudents','adminDashboard','teacherStudents'].includes(AppState.currentPage))renderMainContent()}
function viewStudentDetails(sId){const s=AppState.mockData.students.find(st=>st.id===sId);if(!s){showToast("Student not found","error");return}showPublicVerificationModal(s.id)}
function showPublicVerificationModal(sIdV=null){const b=`<p class="text-sm text-slate-600 mb-4">Enter Student/Cert ID to view public record...</p><div class="space-y-4"><div><label for="verifyStudentId" class="block text-sm font-medium mb-1">ID:</label><input type="text" id="verifyStudentId" class="input-field mt-1 w-full" placeholder="std001 or certNFT001"></div><div id="verificationResult" class="mt-4 p-4 bg-slate-50 rounded-md min-h-[150px] border">Enter ID to see results.</div></div><div class="mt-6 text-xs text-slate-500 p-3 bg-slate-100 rounded-md border flex items-start"><i class="fas fa-shield-alt mr-2 mt-0.5 text-green-600 text-base"></i><div><strong>Security & Privacy:</strong> ...</div></div>`;const f=`<button class="btn btn-secondary" onclick="closeModal('verifyModal')">Close</button><button class="btn btn-primary" onclick="performPublicVerification()"><span class="btn-spinner"></span><span class="btn-text">Verify</span></button>`;showModal('verifyModal','Verify Student Record (Public)',b,f);if(sIdV){const vI=document.getElementById('verifyStudentId');if(vI){vI.value=sIdV;performPublicVerification()}}}
function performPublicVerification(){const verifyBtn=document.querySelector('#verifyModal .btn-primary');const idV=document.getElementById('verifyStudentId')?.value.trim();const rD=document.getElementById('verificationResult');if(!idV){showToast("Enter ID.","error");if(rD)rD.innerHTML=`<p class="text-orange-600 p-3 text-center"><i class="fas fa-exclamation-triangle mr-2"></i>Enter ID.</p>`;return}if(!rD)return;if(verifyBtn){verifyBtn.classList.add('loading');verifyBtn.disabled=true}rD.innerHTML=`<div class="text-center p-4"><i class="fas fa-spinner fa-spin text-2xl text-sky-500"></i><p class="mt-2 text-slate-600">Verifying...</p></div>`;setTimeout(()=>{let s,crt;s=AppState.mockData.students.find(st=>st.id===idV);if(!s){for(const sl of AppState.mockData.students){const c=sl.nftCertificates.find(ct=>ct.id===idV||ct.assetName===idV);if(c){s=sl;crt=c;break}}}if(s){let h=`<h4 class="font-semibold text-lg text-sky-700 mb-1">${s.name}</h4><p class="text-sm text-slate-500 mb-1">Class: ${s.class}</p><p class="text-sm text-slate-500 mb-3">EduCoins: ${s.eduCoins} <i class="fas fa-coins text-yellow-400"></i></p><hr class="my-3">`;if(crt){h+=`<h5 class="font-medium text-md mb-2 text-gray-700">Verified NFT Cert:</h5><div class="nft-card p-3.5 rounded-lg shadow-md mb-3 flex items-start space-x-3 bg-gradient-to-br from-sky-50 to-blue-50 border"><img src="${crt.imageUrl}" alt="${crt.name}" class="w-24 h-16 object-cover rounded-md border flex-shrink-0" onerror="this.src='https://placehold.co/96x64/eeeeee/999999?text=Error&font=inter'"><div><p class="font-semibold text-sky-600">${crt.name}</p><p class="text-xs text-slate-500">Issued: ${crt.issueDate} by ${crt.issuer}</p><p class="text-xs font-semibold text-green-600 mt-1.5"><i class="fas fa-check-circle"></i> Verified</p></div></div>`}else if(s.nftCertificates.length>0){h+=`<h5 class="font-medium text-md mb-2 text-gray-700">Owned NFTs (${s.nftCertificates.length}):</h5>`;s.nftCertificates.slice(0,2).forEach(cl=>{h+=`<div class="nft-card p-3 rounded-md shadow-sm mb-2 flex items-start space-x-3"><img src="${cl.imageUrl}" alt="${cl.name}" class="w-20 h-12 object-cover rounded-md border flex-shrink-0" onerror="this.src='https://placehold.co/80x48/eeeeee/999999?text=Error&font=inter'"><div><p class="font-semibold text-sky-600 text-sm">${cl.name}</p><p class="text-xs text-slate-500">Issued: ${cl.issueDate}</p></div></div>`});if(s.nftCertificates.length>2)h+=`<p class="text-xs text-slate-500 mt-1">& ${s.nftCertificates.length-2} more...</p>`}else{h+=`<p class="text-sm text-slate-500">No NFT certs.</p>`}h+=`<hr class="my-3"><h5 class="font-medium text-md mb-2 text-gray-700">Key Milestones:</h5><ul class="list-disc list-inside text-sm text-slate-600 space-y-1 pl-4">`;const pT=s.academicTimeline.filter(i=>i.type==='milestone'||i.type==='award');pT.slice(0,3).forEach(i=>{h+=`<li>${i.event} (${i.year})</li>`});if(pT.length===0)h+=`<li>No public milestones.</li>`;h+=`</ul>`;rD.innerHTML=h}else{rD.innerHTML=`<p class="text-red-600 p-3 text-center"><i class="fas fa-times-circle mr-2"></i>No record for ID: ${idV}.</p>`}if(verifyBtn){verifyBtn.classList.remove('loading');verifyBtn.disabled=false}},700)}

// --- EVENT LISTENERS ---
loginButton.addEventListener('click', () => { 
    const r = roleSelect.value;
    const uV = usernameInput.value.trim();
    const u = uV || r; 
    AppState.currentUser = { username: u, role: r, did: `did:prism:mock-${u.toLowerCase().replace(/\s/g, '-')}-${Math.random().toString(36).substring(2, 6)}` };

    if (r === 'student') {
        const studentData = AppState.mockData.students.find(s => s.name.toLowerCase().includes(u.toLowerCase())) || AppState.mockData.students[0];
        AppState.currentUser.studentId = studentData.id;
        AppState.currentUser.did = studentData.did; 
    } else if (r === 'teacher') {
        const teacherData = AppState.mockData.teachers.find(t => t.name.toLowerCase().includes(u.toLowerCase())) || AppState.mockData.teachers[0];
        AppState.currentUser.teacherId = teacherData.id;
        AppState.currentUser.did = teacherData.did; 
    } else if (r === 'admin') {
        AppState.currentUser.did = AppState.mockData.school.did; 
    }
    
    showToast(`Logged in as ${u} (${r})`, "success");
    showDashboard(); 
});

logoutButton.addEventListener('click', () => { 
    showToast("Logged out.", "info");
    document.body.classList.add('logging-out');
    setTimeout(() => {
        showLoginPage();
        document.body.classList.remove('logging-out');
    }, 500); 
});

verifyRecordPublicButton.addEventListener('click', () => { showPublicVerificationModal(); });

if(connectWalletButton) { 
    connectWalletButton.addEventListener('click', () => {
        showToast('Simulating Cardano wallet connection... (CIP-30)', 'info');
        setTimeout(() => {
            if(AppState.currentUser) { 
                AppState.currentUser.walletConnected = true;
                AppState.currentUser.walletAddress = `addr_test1q${Math.random().toString(36).substring(2, 100)}`;
                connectWalletButton.innerHTML = `<i class="fas fa-check-circle mr-2 text-green-500"></i> Wallet Connected`;
                connectWalletButton.classList.add('text-green-600', 'bg-green-100', 'dark:text-green-300', 'dark:bg-green-700/30');
                connectWalletButton.disabled = true;
                showToast(`Wallet connected: ${AppState.currentUser.walletAddress.substring(0,15)}...`, 'success');
            } else {
                showToast('Please log in first to connect a wallet.', 'error');
            }
        }, 1500);
    });
}

// Theme toggle listener is attached in renderSidebar after the button is created dynamically


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => { 
    applyTheme(); 

    roleSelect.addEventListener('change',()=>{
        const cU=usernameInput.value.trim();
        const isDefaultRoleUsername = ['admin','teacher','student','parent'].includes(cU.toLowerCase());
        const isId = AppState.mockData.students.some(s=>s.id===cU) || AppState.mockData.teachers.some(t=>t.id===cU);

        if(cU==='' || isDefaultRoleUsername || !isId) { 
            if(roleSelect.value === 'admin') usernameInput.value = 'admin';
            else if(roleSelect.value === 'teacher') usernameInput.value = AppState.mockData.teachers[0].name.split(' ')[1].toLowerCase(); 
            else if(roleSelect.value === 'student') usernameInput.value = AppState.mockData.students[0].name.split(' ')[0].toLowerCase(); 
            else if(roleSelect.value === 'parent') usernameInput.value = 'parent';
        }
    });
    if(roleSelect.value === 'admin') usernameInput.value = 'admin';
    else if(roleSelect.value === 'teacher') usernameInput.value = AppState.mockData.teachers[0].name.split(' ')[1].toLowerCase();
    else if(roleSelect.value === 'student') usernameInput.value = AppState.mockData.students[0].name.split(' ')[0].toLowerCase();
    else if(roleSelect.value === 'parent') usernameInput.value = 'parent';
    
    showLoginPage(); 
});
