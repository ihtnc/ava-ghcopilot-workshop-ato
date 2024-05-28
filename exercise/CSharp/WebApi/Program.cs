using exercise.CSharp.WebApi;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/info", () => Results.Ok(new Data()));
app.MapGet("/new-info", ([FromQuery] string? environment) =>
{
    return Results.Ok(new DataV2());
}).AddEndpointFilter<NonProdFilter>();

app.Run();
