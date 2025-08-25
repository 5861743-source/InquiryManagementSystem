# אפליקציית ניהול עובדים - Angular

## תיאור
אפליקציית Angular לניהול עובדים עם אפשרויות הוספה, עריכה ומחיקה.

## תכונות
- הצגת טבלת עובדים
- טופס הוספת עובד חדש
- עריכת עובד קיים
- מחיקת עובד
- ולידציה בצד לקוח (שם ותפקיד חובה, שכר ≥ 0)

## מבנה הפרויקט
```
src/app/
├── models/
│   └── employee.model.ts          # מודל Employee
├── services/
│   └── employee.service.ts        # שירות HTTP לתקשורת עם API
├── components/
│   └── employees/
│       ├── employees.component.ts
│       ├── employees.component.html
│       └── employees.component.css
├── app.component.ts
├── app.component.html
├── app.component.css
└── app.config.ts                  # הגדרות HttpClient
```

## הפעלת האפליקציה

### דרישות מוקדמות
- Node.js (גרסה 18 ומעלה)
- Angular CLI

### התקנה והפעלה
```bash
# התקנת dependencies
npm install

# הפעלת שרת הפיתוח
ng serve

# האפליקציה תהיה זמינה בכתובת:
# http://localhost:4200
```

## הגדרת API
השירות מוגדר לעבוד עם API בכתובת: `http://localhost:3000/api/employees`

### נקודות קצה נדרשות:
- `GET /api/employees` - קבלת רשימת עובדים
- `POST /api/employees` - הוספת עובד חדש
- `PUT /api/employees/:id` - עדכון עובד
- `DELETE /api/employees/:id` - מחיקת עובד

### מבנה נתונים:
```json
{
  "id": 1,
  "name": "שם העובד",
  "position": "תפקיד",
  "salary": 5000
}
```

## שימוש באפליקציה
1. **הצגת עובדים**: הטבלה מציגה את כל העובדים הקיימים
2. **הוספת עובד**: מלא את הטופס ולחץ "הוסף"
3. **עריכת עובד**: לחץ "ערוך" ליד העובד הרצוי
4. **מחיקת עובד**: לחץ "מחק" ליד העובד הרצוי

## ולידציה
- שם: שדה חובה
- תפקיד: שדה חובה  
- שכר: חייב להיות 0 או יותר