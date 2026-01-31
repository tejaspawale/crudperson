using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Person
{
    public int Id { get; set; }

    [Required]
    [MaxLength(30)]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    [MaxLength(30)]
    public string LastName { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    public int Age { get; set; }

    public decimal Balance { get; set; }
}
