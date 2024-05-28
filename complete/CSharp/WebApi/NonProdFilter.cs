// Create a custom endpoint filter named NonProdFilter on the exercise.CSharp.WebApi namespace.
// The filter should implement the Microsoft.AspNetCore.Http.IEndpointFilter interface.
// It should check the full request URL including the query string for the text "NonProd".
// If the text is present (regardless of casing) the filter should proceed.
// Otherwise, the filter should return a http 404 response.

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Routing;
using System.Threading.Tasks;

namespace exercise.CSharp.WebApi
{
    public class NonProdFilter : IEndpointFilter
    {
        // this method is manually added
        public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
        {
            var allowed = await ShouldAllowRequestAsync(context.HttpContext);
            if (allowed)
            {
                return await next(context);
            }

            return Results.NotFound();
        }

        // this method was added by Copilot
        public Task<bool> ShouldAllowRequestAsync(HttpContext httpContext)
        {
            // also needed to add "using Microsoft.AspNetCore.Http.Extensions;"
            // because of this method call
            var url = httpContext.Request.GetDisplayUrl();
            return Task.FromResult(url.ToLower().Contains("nonprod"));
        }
    }
}