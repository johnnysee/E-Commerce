using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server.DTOs;
using server.Entities;
using server.Services;

namespace server.Controllers
{
  public class AccountController : BaseApiController
  {
    private readonly UserManager<User> _userManager;
    private readonly TokenService _tokenService;

    public AccountController(UserManager<User> userManager, TokenService tokenService)
    {
      _userManager = userManager;
      _tokenService = tokenService;
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
    {
      var user = await _userManager.FindByNameAsync(loginDTO.Username);

      if (user == null || !await _userManager.CheckPasswordAsync(user, loginDTO.Password))
      {
        return Unauthorized();
      }

      return new UserDTO
      {
        Email = user.Email,
        Token = await _tokenService.GenerateToken(user)
      };
    }

    [HttpPost("register")]
    public async Task<ActionResult> Register(RegisterDTO registerDTO)
    {
      var user = new User()
      {
        UserName = registerDTO.Username,
        Email = registerDTO.Email
      };

      var result = await _userManager.CreateAsync(user, registerDTO.Password);

      if (!result.Succeeded)
      {
        foreach (var error in result.Errors)
        {
          ModelState.AddModelError(error.Code, error.Description);
        }

        return ValidationProblem();
      }

      await _userManager.AddToRoleAsync(user, "Member");

      return StatusCode(201);
    }
  }
}