using Microsoft.AspNetCore.Mvc;
using untitled_tree_thing.Models;

namespace untitled_tree_thing.Controllers;

[ApiController]
[Route("[controller]")]
public class TreeController: ControllerBase {
    
    private readonly ILogger<WeatherForecastController> _logger;

    public TreeController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }
    
    [HttpGet(Name = "GetAThing")]
    public IEnumerable<Tree> Get()
    {
        return new List<Tree>();
    }
}