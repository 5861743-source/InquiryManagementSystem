
## תיאור הפרויקט
אפליקציית Angular לניהול פניות עם אפשרויות הוספה, צפייה ומיון.

## תכונות
- הצגת טבלת פניות עם מיון
- הוספת פנייה חדשה במודל
- ולידציה מלאה בטופס
- עיצוב responsive עם Bootstrap
- ארכיטקטורה מודולרית

## טכנולוגיות
- Angular 19
- TypeScript
- Bootstrap 5
- Reactive Forms
- HttpClient

## התקנה והפעלה

```bash
# התקנת dependencies
npm install

# הפעלת שרת הפיתוח
ng serve

# האפליקציה תהיה זמינה ב:
# http://localhost:4200
```

## API
השירות מוגדר לעבוד עם API ב-`https://localhost:44312/api/Requests`

### מבנה נתונים:
```json
{
  "id": 1,
  "applicantName": "שם הפונה",
  "subject": "נושא הפנייה",
  "content": "תוכן הפנייה",
  "submissionDate": "2024-01-01T10:00:00"
}
```

## מבנה הפרויקט
```
src/app/
├── components/
│   ├── inquiries/           # קומפוננטה ראשית
│   ├── inquiry-list/        # טבלת פניות
│   └── inquiry-form/        # טופס הוספה
├── models/
│   └── inquiry.model.ts     # מודל פנייה
└── services/
    └── inquiry.service.ts   # שירות HTTP
```