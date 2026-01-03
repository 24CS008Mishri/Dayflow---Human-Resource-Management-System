# Dayflow HRMS - Quick Start Guide

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Test Credentials

### For Testing as Employee:
- **Email**: `test@company.com`
- **Password**: `Test@1234`
- **Role**: Employee

### For Testing as Admin:
- **Email**: `admin@company.com`
- **Password**: `Admin@1234`
- **Role**: Admin

## Key Features to Try

### Employee Features:
1. **Sign Up & Sign In**
   - Register a new account with valid credentials
   - Password must contain: 8+ chars, uppercase, lowercase, number

2. **Dashboard**
   - Click on Profile card to view/edit your profile
   - Click on Attendance card to see your records
   - Click on Leave Requests to apply for leave
   - Click on Payroll to view salary information

3. **Profile Management**
   - Click "Edit Profile" to update your information
   - Update phone, address as needed

4. **Attendance Tracking**
   - View your daily and weekly attendance
   - Use Check-In/Check-Out buttons

5. **Leave Management**
   - Click "+ Apply for Leave" to submit a request
   - Select leave type, date range, and reason
   - View your leave balance

6. **Payroll**
   - View current month salary
   - See payroll history
   - Check monthly payroll slips

### Admin Features:
1. **Admin Dashboard**
   - View all management options
   - Access employee list, attendance records, leave approvals, payroll

2. **Employee Management**
   - View all employees
   - Click "View" to edit employee details
   - Update job roles and departments

3. **Attendance Records**
   - Filter by date and employee
   - View check-in/check-out times
   - See attendance summary

4. **Leave Approvals**
   - Review pending leave requests
   - Approve or reject with comments
   - View approval history

5. **Payroll Management**
   - Update salary structures
   - View all employee payroll
   - Edit base salary, allowances, deductions

## Project Structure Overview

```
my-react-app/
├── src/
│   ├── components/       # Reusable components
│   ├── context/          # Authentication context
│   ├── pages/            # Page components
│   ├── styles/           # CSS files
│   ├── App.jsx          # Main app with routes
│   └── main.jsx         # Entry point
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Features & Requirements Coverage

### ✅ Implemented Features:
- [x] Authentication (Sign Up/Sign In)
- [x] Role-based access control
- [x] Employee dashboard
- [x] Admin dashboard
- [x] Profile management
- [x] Attendance tracking
- [x] Leave management
- [x] Payroll visibility
- [x] Admin approval workflows
- [x] Responsive design

### 📋 Future Enhancements:
- [ ] Email notifications
- [ ] Analytics & reports dashboard
- [ ] Backend API integration
- [ ] Database persistence
- [ ] Advanced reporting

## Routing Overview

### Public Routes:
- `/signin` - Sign in page
- `/signup` - Sign up page

### Employee Routes (Protected):
- `/dashboard` - Employee dashboard
- `/profile` - Profile management
- `/attendance` - Attendance tracking
- `/leave` - Leave management
- `/payroll` - Payroll view

### Admin Routes (Protected):
- `/admin/dashboard` - Admin dashboard
- `/admin/employees` - Employee management
- `/admin/attendance` - Attendance records
- `/admin/leave-approvals` - Leave approvals
- `/admin/payroll` - Payroll management

## Component Hierarchy

```
App
├── Navigation
└── Routes
    ├── SignUp
    ├── SignIn
    ├── PrivateRoute
    │   ├── DashboardRouter
    │   │   ├── EmployeeDashboard
    │   │   └── AdminDashboard
    │   ├── Profile
    │   ├── Attendance
    │   ├── Leave
    │   ├── Payroll
    │   ├── AdminEmployees
    │   ├── AdminAttendance
    │   ├── AdminLeaveApprovals
    │   └── AdminPayroll
    └── Unauthorized
```

## Available NPM Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## Tips for Development

1. **Mock Data**: All data is currently mocked. Replace with API calls as needed.
2. **Styling**: CSS files are organized by feature in `src/styles/`
3. **State Management**: Uses React Context API for authentication
4. **Routing**: React Router v6 for navigation
5. **Responsive Design**: Mobile-first with 768px breakpoint

## Testing Workflow

### Sign Up Flow:
1. Go to `/signup`
2. Enter Employee ID: `EMP001`
3. Enter Email: `test@test.com`
4. Enter Password: `Test@1234` (meets requirements)
5. Click Sign Up
6. Redirected to dashboard

### Admin Features:
1. Sign in as admin
2. Click on any admin feature from dashboard
3. View mock data
4. Try editing/approving actions
5. Data updates in UI (no persistence)

## Common Customizations

### Change Colors:
Edit `src/styles/` CSS files - Look for color hex values like `#667eea`

### Add New Pages:
1. Create new component in `src/pages/`
2. Add route in `App.jsx`
3. Add styling in `src/styles/`

### Modify Dashboard Cards:
Edit `src/pages/EmployeeDashboard.jsx` or `AdminDashboard.jsx`

### Update Navigation:
Edit `src/components/Navigation.jsx`

## Troubleshooting

### Page not loading:
- Check browser console for errors
- Verify route path matches in `App.jsx`
- Ensure component is imported

### Styles not applying:
- Check CSS file path is correct
- Verify CSS is imported in component
- Clear browser cache

### Authentication not working:
- Ensure `AuthProvider` wraps the app in `App.jsx`
- Check localStorage for auth token
- Verify role in user object

## Next Steps

1. Set up backend API endpoints
2. Replace mock data with API calls
3. Add form validation
4. Implement error handling
5. Add loading states
6. Set up database
7. Deploy to production

## Support & Documentation

- See `HRMS_SETUP.md` for detailed documentation
- Check code comments for implementation details
- Review component structure for examples

---

**Happy coding with Dayflow HRMS!** 🚀
