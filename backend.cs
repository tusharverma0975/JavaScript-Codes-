public class ToDoItem
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime? DueDate { get; set; }
    public bool IsCompleted { get; set; }
}


[Route("api/[controller]")]
[ApiController]
public class ToDoListController : ControllerBase
{
    private readonly TodoContext _context;

    public ToDoListController(TodoContext context)
    {
        _context = context;
    }

    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ToDoItem>>> GetToDoItems()
    {
        return await _context.ToDoItems.ToListAsync();
    }

   
    [HttpPost]
    public async Task<ActionResult<ToDoItem>> PostToDoItem([FromBody] ToDoItem toDoItem)
    {
        _context.ToDoItems.Add(toDoItem);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetToDoItem", new { id = toDoItem.Id }, toDoItem);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> PutToDoItem(int id, [FromBody] ToDoItem toDoItem)
    {
        if (id != toDoItem.Id)
        {
            return BadRequest();
        }

        _context.Entry(toDoItem).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteToDoItem(int id)
    {
        var toDoItem = await _context.ToDoItems.FindAsync(id);
        if (toDoItem == null)
        {
            return NotFound();
        }

        _context.ToDoItems.Remove(toDoItem);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}


public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
    {
    }

    public DbSet<ToDoItem> ToDoItems { get; set; }
}


public class ToDoListControllerTests
{
    private readonly Mock<ITodoContext> _mockContext;
    private readonly ToDoListController _controller;

    public ToDoListControllerTests()
    {
        _mockContext = new Mock<ITodoContext>();
        _controller = new ToDoListController(_mockContext.Object);
    }

    [Fact]
    public async Task GetToDoItems_ShouldReturnAllToDoItems()
    {
        
        var toDoItems = new List<ToDoItem>()
        {
            new ToDoItem() { Id = 1, Title = "Go to the grocery store" },
            new ToDoItem() { Id = 2, Title = "Finish my homework" }
        };
        _mockContext.Setup(x => x.ToDoItems).Returns(toDoItems.AsQueryable());

        
        var result = await _controller.GetToDoItems();

       
        Assert.NotNull(result);
        Assert.Equal(2, result.Value.Count());
    }

    [Fact]
    public async Task PostToDoItem_ShouldCreateNewToDoItem()
    {
        
        var newToDoItem = new ToDoItem() { Title = "Go to the gym" };

       
        var result = await _controller.PostToDoItem(newToDoItem);

        Assert.NotNull(result);
        Assert.Equal(HttpStatusCode.Created, result.StatusCode);
    }

    [Fact]
    public async Task PutToDoItem_ShouldUpdateExistingToDoItem()
    {
      
        var existingToDoItem = new ToDoItem() { Id = 1, Title = "Go to the grocery store" };
        _mockContext.Setup(x => x.ToDoItems.FindAsync(1)).Returns(Task.FromResult(existingToDoItem));

        var updated
    }