import json
import uuid

class ObsidianCanvas:
    def __init__(self):
        self.nodes = []
        self.edges = []

    def add_node(self, type, x, y, width, height, text=None, file=None, color=None):
        node = {
            "id": str(uuid.uuid4()),
            "type": type,
            "x": x,
            "y": y,
            "width": width,
            "height": height
        }
        if text: node["text"] = text
        if file: node["file"] = file
        if color: node["color"] = color
        
        self.nodes.append(node)
        return node["id"]

    def add_edge(self, from_node, from_side, to_node, to_side, label=None):
        edge = {
            "id": str(uuid.uuid4()),
            "fromNode": from_node,
            "fromSide": from_side,
            "toNode": to_node,
            "toSide": to_side
        }
        if label: edge["label"] = label
        self.edges.append(edge)

    def to_json(self):
        return json.dumps({"nodes": self.nodes, "edges": self.edges}, indent=4)

if __name__ == "__main__":
    # Example Usage
    canvas = ObsidianCanvas()
    id1 = canvas.add_node("text", 0, 0, 400, 200, text="# Welcome\nThis is a dashboard.")
    id2 = canvas.add_node("file", 500, 0, 400, 400, file="01 Experience/MyJob.md")
    canvas.add_edge(id1, "right", id2, "left", label="Experience")
    print(canvas.to_json())
