-- SunLight Tarot Database Schema
-- Run this file to set up your database

CREATE DATABASE IF NOT EXISTS sunlight_tarot
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE sunlight_tarot;

-- Subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NULL,
    newsletter BOOLEAN DEFAULT TRUE,
    type ENUM('newsletter', 'registration') DEFAULT 'newsletter',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Votes table (for gallery voting)
CREATE TABLE IF NOT EXISTS votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_id VARCHAR(50) NOT NULL,
    ip_address VARCHAR(45) NULL,
    user_agent VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_image_id (image_id),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daily spreads table (optional - for tracking user spreads)
CREATE TABLE IF NOT EXISTS daily_spreads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NULL,
    reflection_card_id INT NOT NULL,
    activation_card_id INT NOT NULL,
    spread_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_spread_date (spread_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data (optional)
-- INSERT INTO subscribers (email, name, newsletter, type) VALUES
-- ('example@email.com', 'Sample User', TRUE, 'registration');
