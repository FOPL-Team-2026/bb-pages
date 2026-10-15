import re, os

path = "/home/smile/DNHS/bb-pages/FOTPL/contact.md"
with open(path, "rb") as f:
    data = f.read()

# Debug: show what we see around conflict markers
idx1 = data.find(b"<<<<<<< HEAD")
idx2 = data.find(b"=======")
idx3 = data.find(b">>>>>>>")
print(f"Found markers at byte offsets: HEAD={idx1}, ======={idx2}, >>>>>>>={idx3}")

if idx1 >= 0 and idx2 > idx1 and idx3 > idx2:
    # Find the line start of <<<<<<< HEAD
    line_start = data.rfind(b"\n", 0, idx1)
    line_start = line_start + 1 if line_start >= 0 else 0
    
    # Find the line end of >>>>>>> ...
    line_end = data.find(b"\n", idx3)
    if line_end < 0:
        line_end = len(data)
    else:
        line_end += 1  # include the newline
    
    # Extract HEAD content (between <<<<<<< HEAD\r?\n and \r?\n=======)
    head_marker_end = data.find(b"\n", idx1) + 1
    separator_line_start = data.rfind(b"\n", 0, idx2) + 1
    
    head_content = data[head_marker_end:separator_line_start]
    
    # Replace the entire conflict block with HEAD content
    data = data[:line_start] + head_content + data[line_end:]
    
    with open(path, "wb") as f:
        f.write(data)
    print("Conflict resolved successfully")
else:
    print("Could not find all conflict markers")
