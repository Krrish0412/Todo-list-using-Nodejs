<ul class="todo-list">
<% todoTasks.forEach(details => { %>
<% if (details._id == idTask) { %>
<li class="todo-list-item">
<form action="/edit/<%= details._id %>" method="POST">
<input type="text" value="<%= details.content %>" name="content">
<button type="submit">Confirm</button>
<a href="/" class="cancel">Cancel</a>
</form>
</li>
<% } else { %>
<li class="todo-list-item">
<div class="todo-list-item-name"><%= details.content %></div>
<a href="/edit/<%= details._id %>" class="edit"> <span class="fas fa-edit"></span>
</a>
<a href="/remove/<%= details._id %>" class="remove"> <span class="fas fa-times"></span>
</a>
</li>
<% } %>
<% }) %>
