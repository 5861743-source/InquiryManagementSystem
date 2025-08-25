# הוראות העתקה לGitHub

## שלב 1: Clone הפרויקט
```bash
cd "c:\Users\ShulamitKa\Desktop\אישי\מבחן"
git clone https://github.com/5861743-source/inquiry-management-system.git
cd inquiry-management-system
mkdir backend
```

## שלב 2: העתק קבצים אלה לתיקיית backend:

### קבצים עיקריים:
- Program.cs
- Server.csproj
- appsettings.json
- appsettings.Development.json
- .gitignore
- README.md

### תיקיות:
- Controllers/ (כולל InquiriesController.cs)
- Models/ (כולל Inquiry.cs)
- Services/ (כולל InquiryService.cs)
- Properties/ (כולל launchSettings.json)

### קבצים להשאיר (לא להעתיק):
- bin/
- obj/
- *.user
- קבצים ריקים

## שלב 3: Commit
```bash
git add .
git commit -m "Add .NET Core backend API for inquiry management"
git push origin main
```

## מבנה סופי:
```
inquiry-management-system/
├── src/           (Angular)
├── backend/       (חדש - .NET Core)
└── README.md      (עדכן)
```