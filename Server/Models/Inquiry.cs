using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Inquiry
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "שם הפונה חובה")]
        [StringLength(100, ErrorMessage = "שם ארוך מדי")]
        public string ApplicantName { get; set; } = string.Empty;

        [StringLength(200, ErrorMessage = "נושא ארוך מדי")]
        public string Subject { get; set; } = string.Empty;

        [StringLength(1000, ErrorMessage = "תוכן ארוך מדי")]
        public string Content { get; set; } = string.Empty;

        public DateTime SubmissionDate { get; set; } = DateTime.Now;
    }
}