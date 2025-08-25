using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.DTOs;

namespace Server.Services
{
    public class InquiryService
    {
        private readonly AppDbContext _context;

        public InquiryService(AppDbContext context)
        {
            _context = context;
            SeedData();
        }

        public async Task<IEnumerable<InquiryResponseDto>> GetAllAsync()
        {
            var inquiries = await _context.Inquiries.OrderByDescending(i => i.SubmissionDate).ToListAsync();
            return inquiries.Select(i => new InquiryResponseDto
            {
                Id = i.Id,
                ApplicantName = i.ApplicantName,
                Subject = i.Subject,
                SubmissionDate = i.SubmissionDate
            });
        }

        public async Task<Inquiry> AddAsync(Inquiry inquiry)
        {
            if (string.IsNullOrWhiteSpace(inquiry.ApplicantName))
                throw new ArgumentException("שם הפונה חובה");

            inquiry.SubmissionDate = DateTime.Now;
            _context.Inquiries.Add(inquiry);
            await _context.SaveChangesAsync();
            return inquiry;
        }

        private void SeedData()
        {
            if (!_context.Inquiries.Any())
            {
                _context.Inquiries.AddRange(
                    new Inquiry { ApplicantName = "John Doe", Subject = "Technical Issue", Content = "Having problems with login", SubmissionDate = DateTime.Now.AddDays(-1) },
                    new Inquiry { ApplicantName = "Jane Smith", Subject = "Feature Request", Content = "Need new reporting feature", SubmissionDate = DateTime.Now.AddHours(-2) }
                );
                _context.SaveChanges();
            }
        }
    }
}