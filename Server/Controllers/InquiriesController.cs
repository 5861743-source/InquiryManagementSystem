using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;
using Server.DTOs;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InquiriesController : ControllerBase
    {
        private readonly InquiryService _inquiryService;

        public InquiriesController(InquiryService inquiryService)
        {
            _inquiryService = inquiryService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<InquiryResponseDto>>> GetInquiries()
        {
            try
            {
                var inquiries = await _inquiryService.GetAllAsync();
                return Ok(inquiries);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"שגיאה בשרת: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Inquiry>> PostInquiry(Inquiry inquiry)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var created = await _inquiryService.AddAsync(inquiry);
                return CreatedAtAction(nameof(GetInquiries), new { id = created.Id }, created);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"שגיאה בשמירה: {ex.Message}");
            }
        }
    }
}