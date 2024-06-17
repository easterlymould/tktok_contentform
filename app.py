from flask import Flask, request, render_template, redirect, url_for
from openpyxl import load_workbook
from datetime import datetime
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/record', methods=['POST'])
def record():
    try:
        mention_type = request.form['mentionType']
        mention_sentiment = request.form.get('mentionSentiment', '')
        sale_steroids = request.form.get('saleSteroids', '')
        comments = request.form.get('comments', '')
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        # Ensure the file exists before trying to open it
        if not os.path.exists('data.xlsx'):
            return "Error: The data file does not exist.", 500

        # Load the workbook and select the active worksheet
        workbook = load_workbook('data.xlsx')
        sheet = workbook.active

        # Find the next available row
        next_row = sheet.max_row + 1

        # Append the data
        sheet.cell(row=next_row, column=1).value = timestamp
        sheet.cell(row=next_row, column=2).value = mention_type
        sheet.cell(row=next_row, column=3).value = mention_sentiment
        sheet.cell(row=next_row, column=4).value = sale_steroids
        sheet.cell(row=next_row, column=5).value = comments

        workbook.save('data.xlsx')

        return redirect(url_for('index'))
    except Exception as e:
        return f"An error occurred: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)
