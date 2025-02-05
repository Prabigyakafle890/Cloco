#!/bin/bash

Log_File="/home/prabigyakafle/top_cpu_process.log"

# Get Timestamp
echo "Process monitoring $(date)" >> $Log_File

# Command to get top 5 CPU-consuming processes
ps -eo pid,ppid,%cpu,comm --sort=-%cpu | head -n 6 >> $Log_File

# Separator line for better readability
echo "-----------------------------------------" >> $Log_File

