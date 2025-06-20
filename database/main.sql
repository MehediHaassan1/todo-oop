CREATE SCHEMA IF NOT EXISTS todo;

CREATE TYPE task_status AS ENUM ('pending', 'in_progress', 'completed');

CREATE TYPE task_priority AS ENUM ('low', 'medium', 'high');

CREATE TABLE todo.tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status task_status DEFAULT 'pending',
    priority task_priority DEFAULT 'low',
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);