# Inquiry Management System - Backend

## תיאור
Web API ב-.NET Core לניהול פניות לקוחות.

## טכנולוגיות
- .NET Core 8.0
- Entity Framework Core (InMemory)
- ASP.NET Core Web API
- Swagger/OpenAPI

## התקנה והרצה

### דרישות מקדימות
- .NET 8.0 SDK

### הרצת הפרויקט
```bash
cd Server
dotnet restore
dotnet run
```

### API Endpoints
- `GET /api/inquiries` - קבלת רשימת פניות
- `POST /api/inquiries` - הוספת פנייה חדשה

### Swagger UI
לאחר הרצת הפרויקט: `https://localhost:44312/swagger`

## מבנה פנייה
- שם הפונה (חובה)
- נושא הפנייה
- תוכן הפנייה  
- תאריך שליחה (אוטומטי)

## CORS
מוגדר לעבוד עם Angular על `http://localhost:4200`