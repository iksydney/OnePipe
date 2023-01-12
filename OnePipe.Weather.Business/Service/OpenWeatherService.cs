using Flurl;
using Flurl.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using OnePipe.Weather.Common.Contracts;
using OnePipe.Weather.Data.Entities;
using Serilog;
using System.Net;

namespace OnePipe.Weather.Business.Service
{
    public interface IOpenWeatherService
    {
        Task<Response<WeatherData>> GetCity(string city);
    }
    public class OpenWeatherService : IOpenWeatherService
    {
        private readonly AppSettings _appSettings;
        private readonly ILogger<OpenWeatherService> _logger;
        public OpenWeatherService(AppSettings appSettings, ILogger<OpenWeatherService> logger)
        {
            _appSettings = appSettings;
            _logger = logger;
        }

        public async Task<Response<WeatherData>> GetCity(string city)
        {
            var client = new HttpClient();
            var response = Response<WeatherData>.Failed("Search Could not be performed");

            try
            {
                var feedback = await _appSettings.ServiceBaseUrl
                     .AppendPathSegments($"data/2.5/weather")//?q={city}&appid={_appSettings.ApiKey}&units=metric
                     .SetQueryParam("q", city)
                     .SetQueryParam("appid", _appSettings.ApiKey)
                     .SetQueryParam("units", "metric")
                     .GetJsonAsync<WeatherData>();
                _logger.LogInformation($"Responmse {JsonConvert.SerializeObject(feedback)}");

                response = Response<WeatherData>.Success(feedback);

            }
            catch (FlurlHttpException ex) when (ex.Call?.HttpResponseMessage?.StatusCode == HttpStatusCode.Unauthorized)
            {

                Log.Error(ex.Message, ex);
                response = Response<WeatherData>.Failed(ex.Message);
            }
            catch (FlurlHttpException ex) when (ex.Call?.HttpResponseMessage?.StatusCode == HttpStatusCode.NotFound)
            {

                Log.Error(ex.Message, ex);
                response = Response<WeatherData>.Failed("Not found");
            }
            catch (Exception ex)
            {
                _logger.LogError($"Get City Error: {ex.Message}", ex);
                response = Response<WeatherData>.Failed("City Search Failed");
                throw;
            }
            return response;
        }
    }
}
