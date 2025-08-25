namespace Server.DTOs
{
    public class InquiryResponseDto
    {
        public int Id { get; set; }
        public string ApplicantName { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public DateTime SubmissionDate { get; set; }
    }
}