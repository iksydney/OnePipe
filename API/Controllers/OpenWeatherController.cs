using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnePipe.Weather.Business.Service;
using OnePipe.Weather.Common.Helpers;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpenWeatherController : ControllerBase
    {
        private readonly ILogger<OpenWeatherController> _logger;
        private readonly IOpenWeatherService _openWeatherService;
        public OpenWeatherController(ILogger<OpenWeatherController> logger, IOpenWeatherService openWeatherService)
        {
            _logger = logger;
            _openWeatherService = openWeatherService;
        }

        [HttpGet("/city/:city")]
        public async Task<IActionResult> City(string city)
        {
            try
            {
                var weatherData = await _openWeatherService.GetCity(city);
                if (weatherData.Successful)
                {
                    return new ContentResult
                    {
                        Content = Utility.SerializeXML(weatherData),
                        ContentType = "application/xml",
                        StatusCode = 200
                    };

                }
                else
                {
                    return Ok(weatherData);
                }
            }
            catch (HttpRequestException ex)
            {
                throw;
            }
            catch (Exception ex)
            {
                return BadRequest($"Error getting weather details: {ex.Message}");
            }
        }
    }
}
