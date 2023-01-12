using API.Extensions;
using OnePipe.Weather.Business.Service;
using OnePipe.Weather.Common.Contracts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSingleton(builder.Configuration.GetSection("AppSettings").Get<AppSettings>());
builder.Services.AddSingleton<IOpenWeatherService, OpenWeatherService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.SwaggerExtensions();
builder.Services.AddCors(cors =>
{
    cors.AddPolicy("CorsPolicy", cors =>
    {
        cors.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200");
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.SwaggerDocumentation();
app.UseHttpsRedirection();
app.UseCors("CorsPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
