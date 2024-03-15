using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using BindableComponents;
using BindableComponents.Northwind;
using IgniteUI.Blazor.Controls;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddHttpClient();


builder.Services.AddScoped<INorthwindService, NorthwindService>();
RegisterIgniteUI(builder.Services);

void RegisterIgniteUI(IServiceCollection services)
{
    services.AddIgniteUIBlazor(
        typeof(IgbButtonModule),
        typeof(IgbRippleModule),
        typeof(IgbInputModule),
        typeof(IgbSelectModule),
        typeof(IgbSwitchModule),
        typeof(IgbCheckboxModule),
        typeof(IgbRatingModule),
        typeof(IgbSliderModule),
        typeof(IgbDatePickerModule),
        typeof(IgbCalendarModule),
        typeof(IgbComboModule)
    );
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
