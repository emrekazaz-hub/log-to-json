# Log to JSON Converter

This Node.js script reads a log file and converts its contents into JSON format.

## Installation

1. Clone this project:

git clone https://github.com/emrekazaz-hub/log-to-json.git


2. Navigate to the project directory:

cd log-to-json


3. Install dependencies:

npm install


## Usage

1. Place the log file named `logfile.txt` in the project directory. The file should be formatted with one log entry per line. For example:

2024-02-04 10:15:30|INFO|Application started
2024-02-04 10:16:45|ERROR|Database connection failed


2. Run the script:

node logtojson.js

3. You will see the output in JSON format:

[
{
"timestamp": "2024-02-04 10:15:30",
"level": "INFO",
"message": "Application started"
},
{
"timestamp": "2024-02-04 10:16:45",
"level": "ERROR",
"message": "Database connection failed"
}
]


4. The converted JSON output will be saved as `logfile.json` in the project directory.

## Notes

- This script uses Node.js to read the log file and convert it to JSON format.
- Each line in the log file should contain a timestamp, log level, and log message.
- After reading and converting the log file, the script saves the output to a JSON file.
