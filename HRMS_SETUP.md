# Dayflow - Human Resource Management System

## Overview
Dayflow is a comprehensive Human Resource Management System (HRMS) designed to digitize and streamline core HR operations. Built with React and modern web technologies, it provides secure authentication, role-based access control, and streamlined processes for employee management.

**Tagline:** *Every workday, perfectly aligned.*

## Features

### 1. Authentication & Authorization
- **Sign Up**: Register with Employee ID, Email, Password, and Role selection
- **Sign In**: Secure login with email and password
- **Role-Based Access**: Separate dashboards and features for Employees and Admin/HR Officers
- **Password Security**: Enforced password requirements (8+ chars, uppercase, lowercase, numbers)

### 2. Dashboard
#### Employee Dashboard
- Quick-access cards for Profile, Attendance, Leave Requests
- Recent activity and alerts
- Personal profile information

#### Admin/HR Dashboard
- Employee list management
- Attendance records overview
- Leave approval management
- Payroll visibility
- Employee management tools

### 3. Employee Profile Management
- **View Profile**: Personal details, job information, salary structure, profile picture
- **Edit Profile**: Update address, phone number, and profile information
- **Job Details**: Display job title, department, joining date
- **Salary Structure**: View base salary and allowances

### 4. Attendance Tracking
- **Daily View**: Check-in/check-out times
- **Weekly View**: Weekly attendance summary
- **Status Types**: Present, Absent, Half-day, Leave
- **Check-in/Check-out**: Clock in and out functionality
- **Attendance Summary**: Total present, absent, half-days, and leave days

### 5. Leave & Time-Off Management
- **Apply for Leave**: Select leave type (Paid, Sick, Unpaid), set date range, add remarks
- **Leave Balances**: View remaining leave days
- **Leave Status**: Track pending, approved, and rejected requests
- **Admin Approvals**: HR can approve/reject leave requests with comments

### 6. Payroll/Salary Management
- **Employee Payroll View**: Read-only access to salary details
- **Payroll History**: View monthly payroll records
- **Admin Control**: Manage salary structures and ensure accuracy
- **Payroll Slip**: Download monthly payroll slips

### 7. Admin Features
- **Employee Management**: View and edit employee details
- **Attendance Records**: Filter and view attendance by employee and date
- **Leave Approvals**: Review and approve/reject leave requests
- **Payroll Management**: Update salary structures and manage payroll

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Top navigation bar
│   └── PrivateRoute.jsx        # Protected routes with role-based access
├── context/
│   └── AuthContext.jsx         # Authentication context and provider
├── pages/
│   ├── SignUp.jsx              # User registration
│   ├── SignIn.jsx              # User login
│   ├── EmployeeDashboard.jsx   # Employee home page
│   ├── AdminDashboard.jsx      # Admin home page
│   ├── Profile.jsx             # Employee profile
│   ├── Attendance.jsx          # Attendance tracking
│   ├── Leave.jsx               # Leave management
│   ├── Payroll.jsx             # Payroll view
│   ├── AdminEmployees.jsx      # Employee management
│   ├── AdminAttendance.jsx     # Attendance records
│   ├── AdminLeaveApprovals.jsx # Leave approvals
│   ├── AdminPayroll.jsx        # Payroll management
│   └── Unauthorized.jsx        # Access denied page
├── styles/
│   ├── Navigation.css          # Navigation styles
│   ├── Auth.css                # Authentication styles
│   ├── Dashboard.css           # Dashboard styles
│   ├── Profile.css             # Profile styles
│   ├── Attendance.css          # Attendance styles
│   ├── Leave.css               # Leave management styles
│   ├── Payroll.css             # Payroll styles
│   └── AdminFeatures.css       # Admin features styles
├── App.jsx                     # Main app with routing
├── App.css                     # Global styles
└── main.jsx                    # Entry point
```

## Technology Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router v6
- **Styling**: CSS3
- **Build Tool**: Vite
- **Development Server**: Node.js

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Run linting**
   ```bash
   npm run lint
   ```

## Usage

### For Employees

1. **Sign Up**: Create an account with your Employee ID and password
2. **Sign In**: Log in with your credentials
3. **Dashboard**: Access quick-links to Profile, Attendance, Leave, and Payroll
4. **Manage Profile**: View and edit your personal information
5. **Track Attendance**: Check your attendance records and clock in/out
6. **Apply for Leave**: Submit leave requests and track status
7. **View Payroll**: Access your salary and payroll information

### For Admin/HR Officers

1. **Admin Dashboard**: Access all management tools
2. **Manage Employees**: View, edit, and manage employee information
3. **Review Attendance**: Filter and monitor employee attendance
4. **Approve Leaves**: Review and approve/reject leave requests
5. **Manage Payroll**: Update salary structures and view payroll records

## Authentication

The app uses a context-based authentication system:

- **AuthContext**: Manages user state, authentication tokens, and user information
- **Private Routes**: Protected routes that require authentication and proper role
- **Local Storage**: Persists authentication state between sessions

### User Roles

- **Employee**: Limited access to personal information and features
- **Admin/HR**: Full access to all management and approval features

## API Integration (Future)

The current implementation uses mock data. To integrate with a backend API:

1. Update `AuthContext.jsx` with actual API calls
2. Replace mock data in page components with API endpoints
3. Implement proper error handling and loading states
4. Add token-based authentication headers

## Styling

The application uses a consistent design system:

- **Color Scheme**: 
  - Primary: #667eea (Purple)
  - Secondary: #764ba2 (Dark Purple)
  - Success: #10b981 (Green)
  - Error: #f44336 (Red)
  - Neutral: Gray scale

- **Responsive Design**: Mobile-first approach with breakpoints at 768px
- **Components**: Reusable card and button styles
- **Animations**: Smooth transitions and hover effects

## Future Enhancements

1. **Email & Notifications**
   - Email notifications for leave approvals
   - Reminder alerts for attendance
   - System notifications

2. **Analytics & Reports**
   - Employee performance dashboards
   - Attendance analytics
   - Payroll reports
   - Leave analytics

3. **Advanced Features**
   - Time tracking and timesheets
   - Performance reviews
   - Employee onboarding workflow
   - Training and development tracking
   - Employee self-service portal

4. **Integration**
   - Calendar integration
   - Biometric attendance integration
   - Payroll system integration
   - Email system integration

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Performance Considerations

- Component-based architecture for reusability
- Context API for state management
- Lazy loading for routes (can be implemented)
- Optimized CSS with minimal specificity

## Security Considerations

- Password validation and hashing (to be implemented on backend)
- Role-based access control
- Protected routes and API endpoints
- Local storage security (consider using secure cookies)
- HTTPS in production

## Troubleshooting

### Common Issues

1. **Routes not working**: Ensure `react-router-dom` is installed
2. **Styles not loading**: Check CSS file imports and paths
3. **Context not accessible**: Ensure component is wrapped in `AuthProvider`

## Contributing

To contribute to Dayflow:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is part of the Dayflow HR Management System.

## Support

For issues and questions:
- Check the documentation
- Review the code comments
- Contact the development team

## Changelog

### Version 1.0.0
- Initial release
- Core HRMS features
- Authentication and authorization
- Employee and Admin dashboards
- Profile, attendance, leave, and payroll management

---

**Last Updated**: January 3, 2026
**Version**: 1.0.0
